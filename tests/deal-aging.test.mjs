import assert from "node:assert/strict";
import test from "node:test";
import { isDealStale } from "../app/lib/deal-aging.mjs";
test("uses stage-specific aging limits", () => {
  assert.equal(isDealStale({ stage: "Negotiation", daysSinceActivity: 11 }), true);
  assert.equal(isDealStale({ stage: "Discovery", daysSinceActivity: 11 }), false);
});
