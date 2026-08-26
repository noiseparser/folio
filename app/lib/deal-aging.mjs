const limits = { Qualified: 14, Discovery: 21, Proposal: 14, Negotiation: 10 };
export function isDealStale({ stage, daysSinceActivity }) {
  return daysSinceActivity > (limits[stage] ?? 30);
}
