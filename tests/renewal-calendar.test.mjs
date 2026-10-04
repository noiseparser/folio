import assert from "node:assert/strict";
import test from "node:test";
import { groupRenewalsByMonth } from "../app/lib/renewal-calendar.mjs";

test("groups renewals by month in calendar order", () => {
  const calendar = groupRenewalsByMonth([
    { name: "Northwind", renewsOn: "2026-12-04", arr: 20000 },
    { name: "Acme", renewsOn: "2026-11-30", arr: 12000 },
    { name: "Globex", renewsOn: "2026-12-18", arr: 8000 },
  ]);
  assert.deepEqual(calendar, [
    { month: "2026-11", accounts: ["Acme"], arr: 12000 },
    { month: "2026-12", accounts: ["Northwind", "Globex"], arr: 28000 },
  ]);
});
