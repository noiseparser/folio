const DAY = 86_400_000;

export function getFollowUpStatus(dueAt, now = new Date()) {
  const due = new Date(dueAt);
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const target = new Date(due.getFullYear(), due.getMonth(), due.getDate());
  const days = Math.round((target.getTime() - start.getTime()) / DAY);
  if (days < 0) return "overdue";
  if (days === 0) return "due-today";
  return "upcoming";
}
