import assert from "node:assert/strict";
import test from "node:test";
import { findDuplicateContacts } from "../app/lib/contact-deduplication.mjs";
test("matches contacts by normalized email", () => {
  const contacts = [{ id: 1, email: "Maya@Example.com" }, { id: 2, email: "maya@example.com" }];
  assert.deepEqual(findDuplicateContacts(contacts).map((pair) => pair.map((item) => item.id)), [[1, 2]]);
});
