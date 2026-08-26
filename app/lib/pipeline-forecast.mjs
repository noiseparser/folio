const probability = { Qualified: 0.2, Discovery: 0.4, Proposal: 0.65, Negotiation: 0.85 };
export function weightedPipeline(deals) {
  return Math.round(deals.reduce((total, deal) => total + deal.value * (probability[deal.stage] ?? 0), 0));
}
