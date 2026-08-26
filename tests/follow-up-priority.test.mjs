import assert from "node:assert/strict";
import test from "node:test";
import { prioritizeFollowUps } from "../app/lib/follow-up-priority.mjs";

test("keeps urgent open follow-ups ahead of completed work", () => {
  const tasks = [
    { id: 1, meta: "Fri · Brightworks", done: false },
    { id: 2, meta: "Today · Meridian Health", done: false },
    { id: 3, meta: "Today · Fieldstone Studio", done: true },
  ];
  assert.deepEqual(prioritizeFollowUps(tasks).map((task) => task.id), [2, 1, 3]);
});
