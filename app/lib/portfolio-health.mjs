export function summarizePortfolioHealth(accounts) {
  const total = accounts.length;
  const strong = accounts.filter((account) => account.health === "Strong").length;
  const watch = accounts.filter((account) => account.health === "Watch").length;
  const atRisk = accounts.filter((account) => account.health === "At risk").length;
  const score = total === 0 ? 0 : Math.round(((strong + watch * 0.5) / total) * 100);

  return { total, strong, watch, atRisk, onTrack: strong + watch, score };
}
