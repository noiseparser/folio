import assert from "node:assert/strict";
import test from "node:test";
import { serializeAccounts } from "../app/lib/export-accounts.mjs";

test("serializes account exports and neutralizes formulas", () => {
  const csv = serializeAccounts([{ name: "=IMPORTXML()", domain: "example.com", owner: "Maya", stage: "Proposal", health: "Strong", value: 82000 }]);
  assert.match(csv, /"'=IMPORTXML\(\)"/u);
  assert.match(csv, /"example.com"/u);
});
