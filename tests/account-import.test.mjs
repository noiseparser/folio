import assert from "node:assert/strict";
import test from "node:test";
import { normalizeAccountImport } from "../app/lib/account-import.mjs";
test("normalizes imported account fields", () => {
  assert.deepEqual(normalizeAccountImport({ name: " Northstar ", domain: "HTTPS://Northstar.IO/", value: "82000" }), { name: "Northstar", domain: "northstar.io", value: 82000 });
});
