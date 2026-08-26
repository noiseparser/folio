export function summarizeNotifications(notifications) {
  const unread = notifications.filter((item) => !item.read);
  return {
    unreadCount: unread.length,
    accountCount: new Set(unread.map((item) => item.accountId)).size,
    latest: unread.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0] ?? null,
  };
}
