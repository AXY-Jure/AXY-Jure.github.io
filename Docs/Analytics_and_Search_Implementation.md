# AXY Analytics and Search Implementation

This guide describes the privacy-safe analytics and advertising-measurement implementation for the public AXY website, the verified Google configuration, the consent-gated Meta Pixel, and the remaining deferred HubSpot release step. It contains no credentials, verification tokens, form responses, or customer data.

## Scope and identifiers

- Public site: `https://axy.net`
- Canonical host: `https://axy.net/`
- GA4 measurement ID: `G-WTT8L3MJTV`
- GA4 web stream ID: `15362577604`
- Meta Pixel ID: `1804409627403907`
- HubSpot portal ID: `148359284`
- HubSpot General Contact form ID: `30aa0bca-d54a-4174-9901-ba6ee7119191`
- Tailored walkthrough scheduler: `https://meetings-eu1.hubspot.com/jure-malalan/axy-tailored-walkthrough-30-minutes`
- Locally prepared booking confirmation page: `https://axy.net/meeting-booked/`
- Sitemap: `https://axy.net/sitemap.xml`
- Robots file: `https://axy.net/robots.txt`

The Meta Pixel is the only approved advertising-measurement tracker in this implementation. Google Ads remarketing, LinkedIn Insight Tag, and all other advertising pixels remain out of scope.

Current external configuration:

- The verified Search Console Domain property is `axy.net`, and its link to the AXY Website GA4 property and web stream is active.
- Search Console has accepted the 21-page sitemap. The release keeps the same 21 indexable pages and normalizes only their sitemap URLs to the site's existing trailing-slash canonical convention.
- The HubSpot scheduling page currently uses HubSpot's default **Booking confirmed** page. The custom redirect remains deferred until `/meeting-booked/` is published and verified publicly.

## Consent and privacy behavior

Optional measurement remains consent-first:

1. Before a visitor makes a choice, `analytics_storage`, `ad_storage`, `ad_user_data`, and `ad_personalization` are denied. GA4 and Meta Pixel are disabled and neither network script is loaded.
2. Accepting the disclosed optional technologies grants `analytics_storage`, loads GA4, and grants and initializes Meta Pixel. Google's advertising consent fields remain denied, and `ads_data_redaction` remains enabled.
3. Rejecting or withdrawing optional consent keeps both services disabled, revokes Meta Pixel consent, removes accessible `_ga`, `_ga_*`, `_fbp`, and `_fbc` cookies for the current host and `.axy.net`, and clears the non-personal walkthrough analytics marker.
4. The combined optional-consent choice uses the versioned `axy-optional-consent-v2` key. The former GA-only `axy-analytics-consent-v1` acceptance is intentionally not reused, so existing visitors must make a fresh choice before Meta can load.
5. The central event layer checks the current consent state before every event. Unknown, rejected, or withdrawn consent results in no event being sent.
6. The event layer is safe when storage is unavailable or either network script is blocked. It does not make website behavior depend on a measurement request succeeding.
7. Event names and parameters are allowlisted. Unknown properties are discarded, and duplicate event emissions are suppressed where practical.
8. GA4's automatic page context is also sanitized. `page_location` uses the canonical `https://axy.net` origin and the allowlisted pathname. It retains only the exact campaign parameters `utm_source`, `utm_medium`, `utm_campaign`, `utm_id`, `utm_content`, and `utm_term` when each value is 1–64 ASCII characters, starts and ends with a letter or digit, and otherwise uses only letters, digits, periods, underscores, or hyphens; every other query parameter and every fragment is discarded. A valid external HTTP or HTTPS `page_referrer` is reduced to its scheme, hostname, and trailing slash, while `axy.net` and all of its subdomains are suppressed as internal referrers. Referrer credentials, ports, paths, queries, and fragments are never sent.
9. Both network loaders are restricted to `axy.net` and `www.axy.net`; accepting consent on localhost does not send development traffic to either production property.

Never send names, email addresses, telephone numbers, company names, field values, free-text responses, HubSpot submission payloads, booking details, arbitrary URL query strings, or other personal data to GA4 or Meta. `page_path` remains an allowlisted pathname only. The six validated UTM campaign parameters are the sole query-string exception in GA4 `page_location`; campaign creators must never place personal, customer, form, or free-text data in URLs or those values. CTA destinations are normalized to stable destinations without query strings or fragments that could contain data. Meta advanced matching is not enabled.

## Event specification

All custom events below are sent only after analytics consent has been accepted.

| Event | When it is emitted | Allowed parameters |
| --- | --- | --- |
| `form_view` | A known HubSpot form has rendered and is visible | `form_id`, `form_name`, `lead_type`, `page_path` |
| `form_start` | Reliable form engagement is first observed; for updated HubSpot forms this may be the first directional step navigation, with submission success or failure used as a backstop | `form_id`, `form_name`, `lead_type`, `page_path` |
| `form_step` | A supported HubSpot next or previous navigation event occurs | `form_id`, `form_name`, `lead_type`, `step_number`, `step_direction`, `page_path`; `step_name` is reserved but not currently emitted |
| `generate_lead` | HubSpot confirms a successful submission | `form_id`, `form_name`, `lead_type`, `page_path` |
| `form_error` | HubSpot reports a meaningful submission failure without exposing entered values | `form_id`, `form_name`, `lead_type`, `error_type`, `page_path` |
| `create_account_click` | A meaningful commercial CTA sends the visitor to AXY account onboarding | `cta_location`, `destination`, `page_path` |
| `pricing_cta_click` | A specifically identified commercial CTA on the pricing experience is activated | `cta_name`, `destination`, `page_path` |
| `walkthrough_started` | A host-page CTA deliberately opens, reveals, or navigates to the tailored walkthrough scheduler | `meeting_type`, `page_path` |
| `walkthrough_booked` | The visitor reaches the booking-confirmation page through the guarded confirmation flow | `meeting_type`, `page_path` |

`generate_lead` must never be emitted for a failed or merely attempted submission. `form_error` uses a stable category such as `submission_failed`; it does not include validation text or field names. Commercial click tracking is intentionally limited and does not record ordinary navigation.

### Meta Pixel event mapping

Meta receives only the minimum approved standard events after optional consent:

| Website outcome | Meta standard event |
| --- | --- |
| Meta Pixel initializes on a consented document | `PageView` |
| A commercial HubSpot form emits confirmed `generate_lead` | `Lead` |
| The guarded booking-confirmation flow emits `walkthrough_booked` | `Schedule` |

No Meta event is emitted for form views, starts, steps, failures, CTA clicks, scheduler starts, ordinary support activity, or any other website event. The integration sends no form parameters, submitted values, customer identifiers, advanced-matching data, or custom event payloads to Meta. The supplied unconditional `<noscript>` tracking image is deliberately omitted because it cannot respect the website's prior-consent requirement.

### HubSpot event handling

The website prefers HubSpot's supported global form events. It observes form readiness, directional multi-step navigation, submission success, and submission failure. A narrowly filtered legacy `postMessage` listener can support legacy forms, but it reads only the event type and known form identifier. It must never inspect, copy, log, spread, or serialize submission values.

Updated HubSpot forms expose stable form and instance identifiers but do not expose a supported first-input event, stable step label, or detailed error code. Consequently:

- `form_start` is emitted on the first reliable engagement signal and can be backfilled immediately before a confirmed success or failure.
- `form_step` uses only directional events. When HubSpot does not supply a stable step name or number, a step number may be inferred locally for the current form instance.
- The production integration currently emits the inferred `step_number` and `step_direction`. The allowlist and GA4 definition reserve `step_name`, but it remains empty until HubSpot provides or AXY defines a stable, accurate, non-personal label. Do not synthesize an inaccurate substitute.
- `form_error` records only a generic, non-personal failure category.
- New and legacy success signals are deduplicated so one submission produces at most one `generate_lead` event.

Generated HubSpot CSS classes and field DOM selectors are not part of the tracking contract.

## HubSpot form and analytics mappings

Only forms confirmed in the public-site source are listed. Do not invent a form ID or infer a purpose from a label. Operational support intake is deliberately separate from commercial lead analytics.

| Page | HubSpot form ID | `form_name` | `lead_type` | Status |
| --- | --- | --- | --- | --- |
| `/contact` | `30aa0bca-d54a-4174-9901-ba6ee7119191` | `general_contact` | `general_contact` | Confirmed public-site embed |
| `/help` | `7108a1d1-9b04-49ed-84fc-b7c7123e0767` | Not applicable | Not applicable | Product Support embed; excluded from GA4 form lifecycle and `generate_lead` |

The Product Support form is an operational support channel, not a marketing lead form. It uses a dedicated embed component that loads the verified HubSpot form but does not register HubSpot lifecycle listeners, inspect submission values, call `gtag` or `fbq`, or forward any form event or field to GA4 or Meta. HubSpot remains the support-intake source of truth. Names, email addresses, company and VAT details, country, support category, affected application, subject, description, business impact, attachments, and all other submitted values remain outside the website analytics layer.

The public `/create-account` route currently sends visitors to `https://app.axy.net/onboarding`; it does not embed a confirmed HubSpot Free Access form. Therefore no `free_access` form mapping is active on the marketing website. `free_access`, `walkthrough`, `partnership`, and `integration_inquiry` are reserved stable `lead_type` values and should be used only after a matching form and its exact ID and purpose have been verified.

### Adding a future form

1. Confirm the production page, HubSpot portal, exact form ID, and business purpose.
2. For an approved commercial lead form, add the verified ID to the shared HubSpot form integration with a stable snake-case `form_name` and one approved `lead_type`. Operational forms such as Product Support require an explicit analytics decision and must not be assumed to be leads.
3. Reuse the shared HubSpot event integration only for approved commercial lead forms; do not add page-local raw `gtag` calls or generated-class selectors.
4. Verify view, engagement, step, failure, and confirmed-success behavior with mocks or HubSpot test capabilities. Do not create a real lead without approval.
5. Inspect analytics payloads and confirm that only allowlisted parameters are present.
6. Update this table and the relevant tests.

## Walkthrough booking confirmation

`walkthrough_started` is based on a host-page action that deliberately enters the scheduler flow. An iframe load alone is not a meaningful start, and HubSpot Meetings does not provide a documented browser callback that reliably proves either internal interaction or a successful booking.

After analytics consent has been accepted, entering the tailored walkthrough flow stores a short-lived, non-personal pending marker in browser session storage. Unknown or rejected consent does not create the marker, and rejecting or withdrawing consent clears it so a later acceptance cannot retroactively attribute an earlier scheduler click.

The local release includes `/meeting-booked/` as the future successful-booking destination. The production HubSpot scheduler currently retains its default **Booking confirmed** page because the AXY route is not yet published. After the route is deployed and publicly verified, HubSpot can be separately approved to redirect successful bookings to it. The local page:

- contains no booking or visitor details;
- is canonicalized to `https://axy.net/meeting-booked/`;
- is `noindex` and excluded from the sitemap;
- emits `walkthrough_booked` with `meeting_type: tailored_walkthrough` only when the pending marker is present and analytics consent is accepted;
- consumes the marker and uses session-level deduplication after emission so an ordinary refresh does not emit a second event.

Only a flow that began after accepted consent can produce the pending marker. Rejection sends nothing and removes any prior pending marker.

This is an analytics guard, not cryptographic proof of a booking. Session storage can be lost between tabs, browsers, devices, or privacy modes, and a HubSpot redirect rendered inside a third-party iframe may behave differently from a top-level redirect. The future HubSpot redirect must therefore be tested in the actual scheduler without completing a real booking unless approval is given. Direct visits without a pending marker are intentionally not counted.

### Safe HubSpot scheduler configuration

The production scheduling page **AXY – Tailored Walkthrough – 30 Minutes** currently uses HubSpot's default **Booking confirmed** behavior. Its existing host and connected calendar remain unchanged; duration is 30 minutes, availability is Monday through Friday from 09:00 to 17:00 Central European Time, conferencing uses Microsoft Teams, the confirmation email is enabled, and reminders are scheduled one day and one hour before the meeting.

Only after `/meeting-booked/` is deployed and verified publicly as a successful `200` response with `noindex` should the Confirmation setting be reconsidered. The future redirect target is:

`https://axy.net/meeting-booked/`

Before a future save, show the exact current and proposed Confirmation setting, confirm that meeting duration, connected calendar, availability, conferencing provider, host, confirmation email, and reminders are unchanged, and obtain explicit approval. Do not alter another scheduling page or any unrelated HubSpot form, property, workflow, list, or automation. After an approved save, confirm that the existing scheduler still loads. Do not create a real booking without separate approval.

## Google Search Console and DNS status

The verified Search Console property is the Domain property `axy.net`. Both approved Google verification TXT records remain in Cloudflare. The sitemap is accepted with 21 discovered pages, and the Search Console link to the AXY Website GA4 property and stream is active. A Domain property reports across every protocol and subdomain, including the apex, `www`, `app.axy.net`, and `api.axy.net`; that broader reporting scope does not authorize or require any change to the application, API, email, routing, or other services.

The completed setup followed this approval sequence, which remains the guardrail for any future external change:

1. Open the official Google Search Console interface and let the account owner authenticate directly.
2. Create the `axy.net` Domain property and obtain Google's TXT verification record.
3. Before changing DNS, show the exact record type, name, and value to the owner. Do not copy the value into this repository or this document.
4. Open the official Cloudflare interface and let the owner authenticate directly.
5. Display enough of the existing DNS record list to verify the zone and confirm that no unrelated record will be touched.
6. Obtain explicit approval for that exact TXT record.
7. Add only the approved Search Console TXT record. Do not modify application, API, email, SSL, proxy, routing, or unrelated DNS settings.
8. Verify the Domain property in Search Console and leave the TXT record in place.
9. Submit `https://axy.net/sitemap.xml`.
10. Confirm public access to `https://axy.net/robots.txt` and `https://axy.net/sitemap.xml`.
11. Inspect the important public URLs and request indexing where appropriate. Record a request as a request only; do not describe a URL as indexed unless Search Console confirms it.

The site's canonical URLs use the apex HTTPS host and trailing slashes, including `https://axy.net/`. The generated robots file allows public crawling, declares `https://axy.net` as the host, and points to the apex sitemap. The release sitemap retains the successful 21-page set while emitting each page's trailing-slash canonical URL; `/meeting-booked/` is deliberately excluded.

## Verified GA4 configuration

The existing **AXY Website** property uses web stream `https://axy.net`, measurement ID `G-WTT8L3MJTV`, and stream ID `15362577604`. The verified `axy.net` Search Console property is linked to this stream.

Enhanced Measurement was reviewed and left unchanged with **Page views**, **Scrolls**, **Outbound clicks**, **Site search**, **Form interactions**, **Video engagement**, and **File downloads** enabled. Email redaction is active; the GA4 URL query-parameter redaction setting is inactive, but the website supplies its own stricter page context containing only validated, explicitly allowlisted UTM parameters and origin-only external referrers. GA-generated form events can therefore coexist with AXY's custom events, so AXY reporting and funnels must use the custom `form_name` and `lead_type` filters rather than treating every automatically measured form event as an AXY lead signal.

This work did not enable Google Signals, Google Ads linking, remarketing, advertising personalization, advertising storage, ad-user-data consent, or ad-personalization consent. The website's consent gate and payload sanitization remain authoritative even when an Enhanced Measurement feature is enabled.

### Event-scoped custom dimensions

These five event-scoped custom dimensions are created:

| Display name | Event parameter | Current status |
| --- | --- | --- |
| Form Name | `form_name` | Active definition |
| Lead Type | `lead_type` | Active definition |
| Form Step | `step_name` | Created but reserved; the current HubSpot integration does not emit a stable step name |
| Meeting Type | `meeting_type` | Active definition |
| CTA Name | `cta_name` | Active definition |

Other parameters should be added as custom dimensions only when there is a defined reporting need and the value remains low-cardinality and non-personal.

### Key events

`walkthrough_booked` is configured as a GA4 key event. `generate_lead` remains the other approved completed outcome, but its key-event toggle is deferred until the first genuine event is received and appears in GA4. No fake production event was generated to unlock the control.

Do not mark `form_view`, `form_start`, `form_step`, `form_error`, `walkthrough_started`, `create_account_click`, or `pricing_cta_click` as key events.

### Funnel definitions

No GA4 Exploration was created without real event data. The following three definitions are documented for completion when their required events are available.

Free Access funnel:

1. Page view where the path is `/create-account`.
2. `form_view` where `lead_type` is `free_access`.
3. `form_start` or `form_step` where `lead_type` is `free_access`.
4. `generate_lead` where `lead_type` is `free_access`.

The Free Access funnel cannot become complete until the actual onboarding form is instrumented on `app.axy.net` and its authoritative form mapping is known.

General Contact funnel:

1. Page view where the path is `/contact`.
2. `form_view` where `lead_type` is `general_contact`.
3. `form_start` where `lead_type` is `general_contact`.
4. `generate_lead` where `lead_type` is `general_contact`.

Walkthrough funnel:

1. Page view where the path is `/book-a-walkthrough`.
2. `walkthrough_started`. Use an open funnel or allow the start step to precede the page-view step for visitors who click a scheduler CTA on another page; those clicks are intentionally recorded on the source page immediately before navigation to `/book-a-walkthrough`.
3. `walkthrough_booked`.

The walkthrough exploration and production conversion will remain empty until `/meeting-booked/` is deployed, the HubSpot success redirect is separately approved and restored, and genuine consented traffic reaches the route.

GA4 can require an event parameter to be received before a custom definition, key event, or Exploration is configurable. If a control is unavailable, record the exact deferred action and do not claim that configuration is complete.

## Local validation procedure

Use the Windows command wrappers and do not change the PowerShell execution policy.

```powershell
npm.cmd test
npm.cmd run build
npm.cmd run validate:artifact
```

Run any targeted analytics unit test directly if it is not already included by the main test command. For interactive browser checks, start the verified local server with:

```powershell
npm.cmd run start
```

Validate these cases:

1. **Consent unknown:** neither network script loads, and user actions do not add measurement or advertising events.
2. **Consent rejected:** GA4 and Meta stay disabled, no event is sent, Google's advertising consent remains denied, and accessible GA and Meta cookies are removed or disabled.
3. **Consent accepted:** GA4 loads with measurement ID `G-WTT8L3MJTV`; Meta loads with Pixel ID `1804409627403907`; one `PageView` is queued; approved GA4 events enter the data layer once; and every Google advertising consent field remains denied.
4. **Consent withdrawn:** subsequent events stop, Meta consent is revoked, and accessible GA and Meta cookies are cleared.
5. **HubSpot forms:** approved commercial forms map supported lifecycle signals correctly, a failure never produces `generate_lead` or Meta `Lead`, and no submitted value appears in the data layer, Pixel queue, console, URL, or measurement request. The Product Support form renders and submits independently without GA4 or Meta lifecycle integration.
6. **Walkthrough:** the scheduler still renders, the host-page CTA creates a start signal, `/meeting-booked` renders with `noindex`, and confirmation respects consent, the pending marker, refresh deduplication, and the single Meta `Schedule` mapping.
7. **Commercial CTAs:** only intended onboarding and pricing actions emit events, with normalized non-personal destinations.
8. **Regression:** verify the homepage, Product, Retailers, Brands, Pricing, Contact, Create Account, Book a Walkthrough, mobile navigation, images, static assets, canonicals, robots, sitemap, and browser console.

Use mocks or HubSpot test facilities for submissions. Do not create a real HubSpot lead or real meeting without explicit approval. The repository's existing full lint baseline is known to contain unrelated errors and warnings; do not repair it as part of this work. If linting is useful, limit it to changed source files and report whether the changes add errors.

## Known limitations and deferred work

- HubSpot does not expose a supported first-input event for the updated embedded form, so `form_start` uses the first reliable supported signal rather than a fragile field selector.
- Stable step names and detailed validation errors may not be available. Step numbers can be locally inferred, and failures remain generic.
- Cross-origin scheduler internals cannot be treated as a reliable booking API. A future, separately approved HubSpot success redirect will be the browser signal after `/meeting-booked/` is deployed and verified; production currently uses HubSpot's default confirmation.
- Browser storage restrictions can reduce deduplication or cause an otherwise valid confirmation not to be counted.
- Consent intentionally reduces measured traffic and conversions because unknown and rejected visitors are not tracked.
- Ad blockers and network filtering can block GA4 or Meta even after consent; this must not affect the website or HubSpot submission.
- Search Console ownership, the successful sitemap, the Cloudflare verification records/rule, the GA4 dimensions, and the Search Console link are verified external state and must be preserved. Any later external change still requires authentication, exact-setting review, and the applicable approval.
- Search Console indexing requests do not guarantee indexing.

## Later integration for `app.axy.net`

The marketing site's `/create-account` route currently redirects to `https://app.axy.net/onboarding`. A complete Free Access funnel requires a later, separately reviewed implementation in the application:

1. Apply the same consent-first rule on `app.axy.net`; do not assume consent can be shared across hosts without a deliberate privacy and storage design.
2. Track the onboarding form through the application's own stable lifecycle, using `lead_type: free_access` and the same event contracts where appropriate.
3. Emit `generate_lead` only after the application or its authoritative backend confirms successful account creation or accepted lead creation.
4. Keep field values, user identifiers, email addresses, organization details, error messages, and URL parameters out of GA4.
5. Preserve campaign attribution through reviewed, non-personal mechanisms. Do not put personal data into cross-domain linker parameters.
6. Validate cross-domain/session behavior, consent withdrawal, deduplication, and GA4 stream ownership before enabling the combined funnel.
7. Document the authoritative form or onboarding identifier and update the mapping and GA4 funnel only after it is verified.

Changes to `app.axy.net`, its APIs, authentication, billing, or production deployment are not part of the public-site implementation.
