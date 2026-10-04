import assert from "node:assert/strict";
import test from "node:test";
import { snoozeFollowUp, visibleFollowUps } from "../app/lib/follow-up-snooze.mjs";

const today = new Date("2026-10-04T09:00:00Z");

test("snoozes a follow-up by whole days", () => {
  assert.equal(snoozeFollowUp({ title: "Call Acme" }, 3, today).snoozedUntil, "2026-10-07");
});

test("hides follow-ups until their snooze ends", () => {
  const tasks = [{ title: "a" }, { title: "b", snoozedUntil: "2026-10-04" }, { title: "c", snoozedUntil: "2026-10-09" }];
  assert.deepEqual(visibleFollowUps(tasks, today).map((t) => t.title), ["a", "b"]);
});
