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
  additionalLocation: 29,
  announcements: 20,
  messaging: 19,
});

export function calculateMonthlyPricing({ totalUsers = AXY_PRICING.includedUsers, totalBusinessUnits = 1, totalLocations = 1, announcements = false, messaging = false } = {}) {
  const users = Math.max(AXY_PRICING.includedUsers, Number.parseInt(totalUsers, 10) || AXY_PRICING.includedUsers);
  const businessUnits = Math.max(1, Number.parseInt(totalBusinessUnits, 10) || 1);
  const locations = Math.max(1, Number.parseInt(totalLocations, 10) || 1);
  const additionalUsers = Math.max(0, users - AXY_PRICING.includedUsers);
  const additionalBusinessUnits = Math.max(0, businessUnits - 1);
  const additionalLocations = Math.max(0, locations - 1);
  const additionalUserCost = additionalUsers * AXY_PRICING.additionalUser;
  const additionalBusinessUnitCost = additionalBusinessUnits * AXY_PRICING.additionalBusinessUnit;
  const additionalLocationCost = additionalLocations * AXY_PRICING.additionalLocation;
  const announcementsCost = announcements ? AXY_PRICING.announcements : 0;
  const messagingCost = messaging ? AXY_PRICING.messaging : 0;
  return {
    users,
    businessUnits,
    locations,
    additionalUsers,
    additionalBusinessUnits,
    additionalLocations,
    additionalUserCost,
    additionalBusinessUnitCost,
    additionalLocationCost,
    announcementsCost,
    messagingCost,
    customMonthlyTotal: additionalUserCost + additionalBusinessUnitCost + additionalLocationCost + announcementsCost + messagingCost,
  };
}

export function buildSubscriptionUrl({ users, businessUnits, locations, announcements, messaging }) {
  const query = new URLSearchParams({
    users: String(users),
    businessUnits: String(businessUnits),
    locations: String(locations),
    announcements: announcements ? '1' : '0',
    messaging: messaging ? '1' : '0',
  });
  return `${AXY_APP_ROUTES.subscription}?${query.toString()}`;
}
