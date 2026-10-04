export function groupRenewalsByMonth(accounts) {
  const months = new Map();
  for (const account of accounts) {
    const month = account.renewsOn.slice(0, 7);
    const entry = months.get(month) ?? { month, accounts: [], arr: 0 };
    entry.accounts.push(account.name);
    entry.arr += account.arr;
    months.set(month, entry);
  }
  return [...months.values()].sort((a, b) => a.month.localeCompare(b.month));
}
