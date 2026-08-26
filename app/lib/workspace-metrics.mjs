export function summarizeWorkspace({ accounts, tasks }) {
  return {
    activeAccounts: accounts.length,
    openPipeline: accounts.reduce((total, account) => total + account.value, 0),
    followUpsDue: tasks.filter((task) => !task.done).length,
  };
}
