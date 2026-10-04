export function winRateBySource(deals) {
  const sources = new Map();
  for (const deal of deals) {
    if (deal.stage !== "Closed won" && deal.stage !== "Closed lost") continue;
    const entry = sources.get(deal.source) ?? { won: 0, closed: 0 };
    entry.closed += 1;
    if (deal.stage === "Closed won") entry.won += 1;
    sources.set(deal.source, entry);
  }
  return Object.fromEntries(
    [...sources].map(([source, { won, closed }]) => [source, Math.round((won / closed) * 100)]),
  );
}
