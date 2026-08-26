export function filterAccountsByOwner(accounts, owner) {
  if (!owner || owner === "All owners") return accounts;
  return accounts.filter((account) => account.owner === owner);
}
