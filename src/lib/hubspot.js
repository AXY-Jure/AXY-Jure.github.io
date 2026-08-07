const HUBSPOT_FORM_HOST_SUFFIXES = ['.hsforms.com', '.hsforms.net'];
const LEGACY_FORM_EVENTS = new Set(['onFormReady', 'onFormSubmit', 'onFormSubmitted']);

function trustedHubSpotOrigin(origin) {
  try {
    const url = new URL(origin);
    return url.protocol === 'https:' && HUBSPOT_FORM_HOST_SUFFIXES.some((suffix) => url.hostname.endsWith(suffix));
  } catch {
    return false;
  }
}

export function legacyHubSpotFormEventName(event, frame, formId) {
  if (!event || !frame || !trustedHubSpotOrigin(event.origin)) return null;

  const embeddedFrames = Array.from(frame.querySelectorAll?.('iframe') || []);
  if (!embeddedFrames.some((embeddedFrame) => embeddedFrame.contentWindow === event.source)) return null;

  // Read only lifecycle identifiers after the sender has been authenticated.
  // Other payload properties can contain submitted field values and remain untouched.
  const data = event.data;
  if (!data || typeof data !== 'object') return null;
  const { type, eventName, id } = data;
  if (type !== 'hsFormCallback' || id !== formId || !LEGACY_FORM_EVENTS.has(eventName)) return null;
  return eventName;
}

export function createHubSpotFormLifecycleTracker(trackEvent) {
  let started = false;
  let leadSent = false;
  const stepByInstance = new Map();

  const start = () => {
    if (started) return false;
    started = trackEvent('form_start', {});
    return started;
  };

  const navigate = (direction, instanceId) => {
    if (direction !== 'next' && direction !== 'previous') return false;
    start();

    const key = typeof instanceId === 'string' && instanceId ? instanceId : 'default';
    const previousStep = stepByInstance.get(key) || 1;
    const stepNumber = direction === 'next' ? previousStep + 1 : Math.max(1, previousStep - 1);
    stepByInstance.set(key, stepNumber);
    return trackEvent('form_step', { step_number: stepNumber, step_direction: direction });
  };

  const success = () => {
    if (leadSent) return false;
    start();
    leadSent = trackEvent('generate_lead', {});
    return leadSent;
  };

  const failure = () => {
    start();
    return trackEvent('form_error', { error_type: 'submission_failed' });
  };

  return { failure, navigate, start, success };
}
