export function snoozeFollowUp(task, days, today = new Date()) {
  const until = new Date(today);
  until.setUTCDate(until.getUTCDate() + days);
  return { ...task, snoozedUntil: until.toISOString().slice(0, 10) };
}

export function visibleFollowUps(tasks, today = new Date()) {
  const date = today.toISOString().slice(0, 10);
  return tasks.filter((task) => !task.snoozedUntil || task.snoozedUntil <= date);
}
