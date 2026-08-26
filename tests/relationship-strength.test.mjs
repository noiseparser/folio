import assert from "node:assert/strict";
import test from "node:test";
import { relationshipStrength } from "../app/lib/relationship-strength.mjs";
test("balances activity volume with recency", () => {
  assert.equal(relationshipStrength({ meaningfulTouches: 6, daysSinceLastTouch: 3 }), 78);
  assert.equal(relationshipStrength({ meaningfulTouches: 1, daysSinceLastTouch: 30 }), 8);
});
