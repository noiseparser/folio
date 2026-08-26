export function summarizeDealVelocity(transitions) {
  const totals = new Map();
  for (const transition of transitions) {
    const entry = totals.get(transition.stage) ?? { days: 0, count: 0 };
    entry.days += transition.days;
    entry.count += 1;
    totals.set(transition.stage, entry);
  }
  return Object.fromEntries([...totals].map(([stage, value]) => [stage, Math.round(value.days / value.count)]));
}
