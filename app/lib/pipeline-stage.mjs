const nextStage = { Qualified: "Discovery", Discovery: "Proposal", Proposal: "Negotiation", Negotiation: "Won" };
export function canAdvanceDeal(current, requested) {
  return nextStage[current] === requested;
}
