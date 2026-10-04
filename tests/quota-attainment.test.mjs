import assert from "node:assert/strict";
import test from "node:test";
import { quotaAttainment } from "../app/lib/quota-attainment.mjs";

test("counts only closed-won deals toward quota", () => {
  const reps = [{ id: 1, name: "Ana", quota: 100000 }];
  const deals = [
    { ownerId: 1, stage: "Closed won", value: 45000 },
    { ownerId: 1, stage: "Proposal", value: 90000 },
    { ownerId: 2, stage: "Closed won", value: 10000 },
  ];
  assert.deepEqual(quotaAttainment(reps, deals), [{ name: "Ana", booked: 45000, attainment: 45 }]);
});
