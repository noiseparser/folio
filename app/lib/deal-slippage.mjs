export function slippedDeals(deals) {
  return deals
    .map((deal) => {
      const first = deal.closeDateHistory[0];
      const latest = deal.closeDateHistory.at(-1);
      return { name: deal.name, pushes: deal.closeDateHistory.length - 1, slipped: latest > first };
    })
    .filter((deal) => deal.slipped)
    .sort((a, b) => b.pushes - a.pushes);
}
