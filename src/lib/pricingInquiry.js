export function buildPricingInquirySummary(plan, labels) {
  if (!plan || !labels) return '';

  const enabledLabel = labels.selected;
  const disabledLabel = labels.notSelected;
  return [
    labels.messageTitle,
    '',
    `${labels.users}: ${plan.users}`,
    `${labels.businessUnits}: ${plan.businessUnits}`,
    `${labels.locations}: ${plan.locations}`,
    `${labels.announcements}: ${plan.modules?.announcements ? enabledLabel : disabledLabel}`,
    `${labels.messaging}: ${plan.modules?.messaging ? enabledLabel : disabledLabel}`,
    `${labels.estimatedTotal}: €${plan.estimatedMonthlyTotal}${labels.monthSuffix}`,
  ].join('\n');
}
