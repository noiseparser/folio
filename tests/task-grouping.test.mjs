import assert from "node:assert/strict";
import test from "node:test";
import { groupTasksByStatus } from "../app/lib/task-grouping.mjs";
test("groups tasks into daily workflow sections", () => {
  const grouped = groupTasksByStatus([{ due: "Today", done: false }, { due: "Fri", done: false }, { due: "Today", done: true }]);
  assert.deepEqual(Object.fromEntries(Object.entries(grouped).map(([key, value]) => [key, value.length])), { today: 1, upcoming: 1, completed: 1 });
});
