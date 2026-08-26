import assert from "node:assert/strict";
import test from "node:test";
import { summarizeDealVelocity } from "../app/lib/deal-velocity.mjs";
test("averages time spent in each stage", () => {
  assert.deepEqual(summarizeDealVelocity([{ stage: "Discovery", days: 4 }, { stage: "Discovery", days: 8 }, { stage: "Proposal", days: 3 }]), { Discovery: 6, Proposal: 3 });
});
