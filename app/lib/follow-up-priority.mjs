const urgency = { Today: 0, Tomorrow: 1, Fri: 2 };

export function prioritizeFollowUps(tasks) {
  return [...tasks].sort((left, right) => {
    if (left.done !== right.done) return left.done ? 1 : -1;
    const leftDue = left.meta.split(" · ")[0];
    const rightDue = right.meta.split(" · ")[0];
    return (urgency[leftDue] ?? 99) - (urgency[rightDue] ?? 99);
  });
}
