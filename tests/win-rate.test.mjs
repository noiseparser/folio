import assert from "node:assert/strict";
import test from "node:test";
import { winRateBySource } from "../app/lib/win-rate.mjs";

test("ignores open deals and reports a percentage per source", () => {
  const deals = [
    { source: "Referral", stage: "Closed won" },
    { source: "Referral", stage: "Closed lost" },
    { source: "Inbound", stage: "Closed won" },
    { source: "Inbound", stage: "Negotiation" },
  ];
  assert.deepEqual(winRateBySource(deals), { Referral: 50, Inbound: 100 });
});
