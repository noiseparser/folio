export function rankAccountMatches(accounts, query) {
  const needle = query.trim().toLowerCase();
  return accounts.map((account) => {
    const name = account.name.toLowerCase();
    const domain = account.domain.toLowerCase();
    const score = name === needle ? 100 : name.startsWith(needle) ? 70 : domain.includes(needle) ? 50 : name.includes(needle) ? 30 : 0;
    return { account, score };
  }).filter((match) => match.score > 0).sort((a, b) => b.score - a.score).map((match) => match.account);
}
