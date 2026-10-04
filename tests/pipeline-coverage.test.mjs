import assert from "node:assert/strict";
import test from "node:test";
import { pipelineCoverage } from "../app/lib/pipeline-coverage.mjs";

test("compares weighted open pipeline against the target", () => {
  const deals = [
    { stage: "Proposal", value: 40000, probability: 0.5 },
    { stage: "Discovery", value: 20000, probability: 0.2 },
    { stage: "Closed won", value: 90000, probability: 1 },
  ];
  assert.deepEqual(pipelineCoverage(deals, 48000), { open: 2, weighted: 24000, coverage: 0.5 });
});
