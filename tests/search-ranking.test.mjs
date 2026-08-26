import assert from "node:assert/strict";
import test from "node:test";
import { rankAccountMatches } from "../app/lib/search-ranking.mjs";
test("places exact account matches first", () => {
  const accounts = [{ name: "Northstar", domain: "northstar.io" }, { name: "Northstar Labs", domain: "labs.dev" }];
  assert.equal(rankAccountMatches(accounts, "Northstar")[0].name, "Northstar");
});
