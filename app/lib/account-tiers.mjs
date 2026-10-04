const TIERS = [
  { name: "Enterprise", minArr: 250000 },
  { name: "Mid-market", minArr: 50000 },
  { name: "Growth", minArr: 10000 },
];

export function tierForAccount(account) {
  return TIERS.find((tier) => account.arr >= tier.minArr)?.name ?? "Starter";
}

export function countAccountsByTier(accounts) {
  const counts = { Enterprise: 0, "Mid-market": 0, Growth: 0, Starter: 0 };
  for (const account of accounts) counts[tierForAccount(account)] += 1;
  return counts;
}
