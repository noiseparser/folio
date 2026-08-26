import assert from "node:assert/strict";
import test from "node:test";
import { getFollowUpStatus } from "../app/lib/task-due-date.mjs";

test("labels overdue, current, and future follow-ups", () => {
  const now = new Date("2026-08-25T12:00:00Z");
  assert.equal(getFollowUpStatus("2026-08-24T12:00:00Z", now), "overdue");
  assert.equal(getFollowUpStatus("2026-08-25T18:00:00Z", now), "due-today");
  assert.equal(getFollowUpStatus("2026-08-26T12:00:00Z", now), "upcoming");
});
