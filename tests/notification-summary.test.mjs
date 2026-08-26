import assert from "node:assert/strict";
import test from "node:test";
import { summarizeNotifications } from "../app/lib/notification-summary.mjs";
test("summarizes unread account notifications", () => {
  const result = summarizeNotifications([{ accountId: 1, read: false, createdAt: "2026-08-20" }, { accountId: 2, read: false, createdAt: "2026-08-22" }, { accountId: 2, read: true, createdAt: "2026-08-23" }]);
  assert.equal(result.unreadCount, 2);
  assert.equal(result.accountCount, 2);
  assert.equal(result.latest.accountId, 2);
});
