import assert from "node:assert/strict";
import test from "node:test";
import { weightedPipeline } from "../app/lib/pipeline-forecast.mjs";
test("weights deal values by stage", () => {
  assert.equal(weightedPipeline([{ value: 100000, stage: "Proposal" }, { value: 50000, stage: "Discovery" }]), 85000);
});
