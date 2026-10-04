import assert from "node:assert/strict";
import test from "node:test";
import { countAccountsByTier, tierForAccount } from "../app/lib/account-tiers.mjs";

test("assigns the highest tier the account qualifies for", () => {
  assert.equal(tierForAccount({ arr: 300000 }), "Enterprise");
  assert.equal(tierForAccount({ arr: 50000 }), "Mid-market");
  assert.equal(tierForAccount({ arr: 9999 }), "Starter");
});

test("counts accounts in every tier", () => {
  assert.deepEqual(countAccountsByTier([{ arr: 12000 }, { arr: 15000 }, { arr: 400000 }]), {
    Enterprise: 1,
    "Mid-market": 0,
    Growth: 2,
    Starter: 0,
  });
});
