import assert from "node:assert/strict";
import test from "node:test";
import { summarizeWorkspace } from "../app/lib/workspace-metrics.mjs";
test("summarizes account and task activity", () => {
  assert.deepEqual(summarizeWorkspace({ accounts: [{ value: 40 }, { value: 60 }], tasks: [{ done: false }, { done: true }] }), { activeAccounts: 2, openPipeline: 100, followUpsDue: 1 });
});
