export function groupActivityByDay(events) {
  return [...events].sort((a, b) => new Date(b.occurredAt) - new Date(a.occurredAt)).reduce((groups, event) => {
    const day = event.occurredAt.slice(0, 10);
    (groups[day] ??= []).push(event);
    return groups;
  }, {});
}
