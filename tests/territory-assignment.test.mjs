import assert from "node:assert/strict";
import test from "node:test";
import { assignTerritories } from "../app/lib/territory-assignment.mjs";

test("routes accounts to the owner of their region", () => {
  const territories = [{ region: "EMEA", owner: "Lea" }, { region: "NA", owner: "Sam" }];
  const assigned = assignTerritories([{ name: "Acme", region: "NA" }, { name: "Umbrella", region: "APAC" }], territories);
  assert.deepEqual(assigned.map((a) => a.owner), ["Sam", "Unassigned"]);
});
