export function normalizeAccountImport(record) {
  return {
    name: String(record.name ?? "").trim(),
    domain: String(record.domain ?? "").trim().toLowerCase().replace(/^https?:\/\//u, "").replace(/\/$/u, ""),
    value: Math.max(0, Number(record.value) || 0),
  };
}
