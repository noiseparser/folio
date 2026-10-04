export function assignTerritories(accounts, territories) {
  const byRegion = new Map(territories.map((territory) => [territory.region, territory.owner]));
  return accounts.map((account) => ({
    ...account,
    owner: byRegion.get(account.region) ?? "Unassigned",
  }));
}
