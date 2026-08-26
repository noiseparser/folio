import assert from "node:assert/strict";
import test from "node:test";
import { canAdvanceDeal } from "../app/lib/pipeline-stage.mjs";
test("allows only the next pipeline stage", () => {
  assert.equal(canAdvanceDeal("Discovery", "Proposal"), true);
  assert.equal(canAdvanceDeal("Discovery", "Negotiation"), false);
});
