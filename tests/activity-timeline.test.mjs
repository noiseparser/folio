import assert from "node:assert/strict";
import test from "node:test";
import { groupActivityByDay } from "../app/lib/activity-timeline.mjs";
test("groups events by day in reverse chronology", () => {
  const grouped = groupActivityByDay([{ id: 1, occurredAt: "2026-08-20T09:00:00Z" }, { id: 2, occurredAt: "2026-08-21T10:00:00Z" }]);
  assert.deepEqual(Object.keys(grouped), ["2026-08-21", "2026-08-20"]);
});
