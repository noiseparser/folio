import assert from "node:assert/strict";
import test from "node:test";
import { meetingCadence } from "../app/lib/meeting-cadence.mjs";

test("averages the days between meetings", () => {
  assert.equal(meetingCadence([{ at: "2026-09-21" }, { at: "2026-09-01" }, { at: "2026-09-08" }]), 10);
});

test("needs at least two meetings", () => {
  assert.equal(meetingCadence([{ at: "2026-09-01" }]), null);
});
