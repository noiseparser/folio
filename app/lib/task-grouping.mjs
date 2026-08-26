export function groupTasksByStatus(tasks) {
  return tasks.reduce((groups, task) => {
    const group = task.done ? "completed" : task.due === "Today" ? "today" : "upcoming";
    groups[group].push(task);
    return groups;
  }, { today: [], upcoming: [], completed: [] });
}
