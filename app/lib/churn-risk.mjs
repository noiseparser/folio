const DAY = 24 * 60 * 60 * 1000;

export function churnRisk(account, now = new Date()) {
  const quietDays = Math.floor((now - new Date(account.lastActivityAt)) / DAY);
  let risk = 100 - account.healthScore;
  if (quietDays > 30) risk += 20;
  if (account.openTickets > 3) risk += 10;
  return Math.min(100, Math.max(0, risk));
}

export function atRiskAccounts(accounts, threshold = 60, now = new Date()) {
  return accounts
    .map((account) => ({ ...account, risk: churnRisk(account, now) }))
    .filter((account) => account.risk >= threshold)
    .sort((a, b) => b.risk - a.risk);
}
