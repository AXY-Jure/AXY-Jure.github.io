export const AXY_APP_ROUTES = Object.freeze({
  onboarding: 'https://app.axy.net/onboarding',
  authentication: 'https://app.axy.net/authentication',
  subscription: 'https://app.axy.net/subscribe',
  billing: 'https://app.axy.net/settings/billing',
});

// Enable only after the authenticated app routes and Stripe Sandbox flow pass.
export const BILLING_READY = false;

export const AXY_PRICING = Object.freeze({
  includedUsers: 2,
  additionalUser: 15,
  additionalBusinessUnit: 49,
  announcements: 20,
  messaging: 19,
});

export function calculateMonthlyPricing({ totalUsers = AXY_PRICING.includedUsers, totalBusinessUnits = 1, announcements = false, messaging = false } = {}) {
  const users = Math.max(AXY_PRICING.includedUsers, Number.parseInt(totalUsers, 10) || AXY_PRICING.includedUsers);
  const businessUnits = Math.max(1, Number.parseInt(totalBusinessUnits, 10) || 1);
  const additionalUsers = Math.max(0, users - AXY_PRICING.includedUsers);
  const additionalBusinessUnits = Math.max(0, businessUnits - 1);
  const additionalUserCost = additionalUsers * AXY_PRICING.additionalUser;
  const additionalBusinessUnitCost = additionalBusinessUnits * AXY_PRICING.additionalBusinessUnit;
  const announcementsCost = announcements ? AXY_PRICING.announcements : 0;
  const messagingCost = messaging ? AXY_PRICING.messaging : 0;
  return {
    users,
    businessUnits,
    additionalUsers,
    additionalBusinessUnits,
    additionalUserCost,
    additionalBusinessUnitCost,
    announcementsCost,
    messagingCost,
    customMonthlyTotal: additionalUserCost + additionalBusinessUnitCost + announcementsCost + messagingCost,
  };
}

export function buildSubscriptionUrl({ users, businessUnits, announcements, messaging }) {
  const query = new URLSearchParams({
    users: String(users),
    businessUnits: String(businessUnits),
    announcements: announcements ? '1' : '0',
    messaging: messaging ? '1' : '0',
  });
  return `${AXY_APP_ROUTES.subscription}?${query.toString()}`;
}
