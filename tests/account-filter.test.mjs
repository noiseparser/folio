import assert from "node:assert/strict";
import test from "node:test";
import { filterAccountsByOwner } from "../app/lib/account-filter.mjs";

test("filters accounts by owner without changing the all-owners view", () => {
  const accounts = [{ owner: "Maya" }, { owner: "Jon" }, { owner: "Maya" }];
  assert.equal(filterAccountsByOwner(accounts, "Maya").length, 2);
  assert.equal(filterAccountsByOwner(accounts, "All owners").length, 3);
});
