import assert from "node:assert/strict";
import test from "node:test";
import { summarizePortfolioHealth } from "../app/lib/portfolio-health.mjs";

test("summarizes portfolio health from account status", () => {
  const summary = summarizePortfolioHealth([
    { health: "Strong" },
    { health: "Strong" },
    { health: "Watch" },
    { health: "At risk" },
  ]);
  assert.deepEqual(summary, { total: 4, strong: 2, watch: 1, atRisk: 1, onTrack: 3, score: 63 });
});
