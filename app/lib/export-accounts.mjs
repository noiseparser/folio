const columns = ["name", "domain", "owner", "stage", "health", "value"];

function csvCell(value) {
  let text = String(value ?? "");
  if (/^[=+\-@]/u.test(text)) text = "'" + text;
  return '"' + text.replaceAll('"', '""') + '"';
}

export function serializeAccounts(accounts) {
  const rows = accounts.map((account) => columns.map((column) => csvCell(account[column])).join(","));
  return [columns.join(","), ...rows].join("\n");
}
