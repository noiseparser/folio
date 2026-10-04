import assert from "node:assert/strict";
import test from "node:test";
import { atRiskAccounts, churnRisk } from "../app/lib/churn-risk.mjs";

const now = new Date("2026-10-04T12:00:00Z");

test("raises risk for quiet accounts with open tickets", () => {
  assert.equal(churnRisk({ healthScore: 70, lastActivityAt: "2026-08-01", openTickets: 5 }, now), 60);
  assert.equal(churnRisk({ healthScore: 90, lastActivityAt: "2026-10-01", openTickets: 0 }, now), 10);
});

test("lists accounts over the threshold, riskiest first", () => {
  const accounts = [
    { name: "Acme", healthScore: 30, lastActivityAt: "2026-10-02", openTickets: 0 },
    { name: "Globex", healthScore: 20, lastActivityAt: "2026-07-01", openTickets: 4 },
    { name: "Initech", healthScore: 85, lastActivityAt: "2026-10-03", openTickets: 1 },
  ];
  assert.deepEqual(atRiskAccounts(accounts, 60, now).map((a) => a.name), ["Globex", "Acme"]);
});
