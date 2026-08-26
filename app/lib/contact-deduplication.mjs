export function findDuplicateContacts(contacts) {
  const seen = new Map();
  const duplicates = [];
  for (const contact of contacts) {
    const key = String(contact.email ?? "").trim().toLowerCase();
    if (!key) continue;
    if (seen.has(key)) duplicates.push([seen.get(key), contact]);
    else seen.set(key, contact);
  }
  return duplicates;
}
