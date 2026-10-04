export function pipelineCoverage(deals, target) {
  const open = deals.filter((deal) => !deal.stage.startsWith("Closed"));
  const weighted = open.reduce((sum, deal) => sum + deal.value * deal.probability, 0);
  return { open: open.length, weighted, coverage: target > 0 ? Number((weighted / target).toFixed(2)) : null };
}
