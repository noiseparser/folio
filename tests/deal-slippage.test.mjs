import assert from "node:assert/strict";
import test from "node:test";
import { slippedDeals } from "../app/lib/deal-slippage.mjs";

test("flags deals whose close date moved later, most pushed first", () => {
  const deals = [
    { name: "Acme renewal", closeDateHistory: ["2026-09-30", "2026-10-15", "2026-11-01"] },
    { name: "Globex expansion", closeDateHistory: ["2026-10-20"] },
    { name: "Initech pilot", closeDateHistory: ["2026-10-01", "2026-10-10"] },
  ];
  assert.deepEqual(slippedDeals(deals), [
    { name: "Acme renewal", pushes: 2, slipped: true },
    { name: "Initech pilot", pushes: 1, slipped: true },
  ]);
});
