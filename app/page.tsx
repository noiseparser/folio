"use client";

import { useMemo, useState } from "react";

type Account = {
  name: string;
  domain: string;
  owner: string;
  value: number;
  stage: string;
  health: "Strong" | "Watch" | "At risk";
  next: string;
  contact: string;
};

const accounts: Account[] = [
  { name: "Northstar Labs", domain: "northstarlabs.io", owner: "Maya", value: 82000, stage: "Proposal", health: "Strong", next: "Review proposal", contact: "Elena Ruiz" },
  { name: "Harbor & Pine", domain: "harborandpine.co", owner: "Jon", value: 46000, stage: "Discovery", health: "Watch", next: "Confirm stakeholders", contact: "Theo Martin" },
  { name: "Meridian Health", domain: "meridianhealth.com", owner: "Maya", value: 128000, stage: "Negotiation", health: "Strong", next: "Security review", contact: "Priya Shah" },
  { name: "Summit Freight", domain: "summitfreight.com", owner: "Avery", value: 64000, stage: "Qualified", health: "At risk", next: "Reconnect with sponsor", contact: "Marcus Lee" },
  { name: "Fieldstone Studio", domain: "fieldstone.studio", owner: "Jon", value: 38000, stage: "Proposal", health: "Strong", next: "Share revised scope", contact: "Nora Chen" },
  { name: "Brightworks", domain: "brightworks.dev", owner: "Avery", value: 56000, stage: "Discovery", health: "Watch", next: "Technical discovery", contact: "Sam Wilson" },
];

const activities = [
  { initials: "MR", person: "Maya", action: "moved Meridian Health to Negotiation", time: "18 min ago", tone: "violet" },
  { initials: "JL", person: "Jon", action: "added a note to Harbor & Pine", time: "1 hr ago", tone: "blue" },
  { initials: "AR", person: "Avery", action: "completed discovery with Brightworks", time: "3 hrs ago", tone: "green" },
  { initials: "MR", person: "Maya", action: "shared a proposal with Northstar Labs", time: "Yesterday", tone: "violet" },
];

const initialTasks = [
  { id: 1, label: "Review Meridian security questionnaire", meta: "Today · Meridian Health", done: false },
  { id: 2, label: "Send revised scope", meta: "Today · Fieldstone Studio", done: false },
  { id: 3, label: "Confirm implementation stakeholders", meta: "Tomorrow · Harbor & Pine", done: false },
  { id: 4, label: "Schedule technical discovery", meta: "Fri · Brightworks", done: true },
];

const money = (value: number) => `$${Math.round(value / 1000)}k`;

export default function Home() {
  const [section, setSection] = useState("Overview");
  const [query, setQuery] = useState("");
  const [tasks, setTasks] = useState(initialTasks);
  const [selected, setSelected] = useState<Account | null>(null);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return accounts;
    return accounts.filter((account) =>
      [account.name, account.domain, account.owner, account.stage, account.contact]
        .join(" ")
        .toLowerCase()
        .includes(normalized),
    );
  }, [query]);

  const toggleTask = (id: number) => {
    setTasks((current) => current.map((task) => task.id === id ? { ...task, done: !task.done } : task));
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">F</span><span>Folio</span></div>
        <nav aria-label="Primary navigation">
          {["Overview", "Accounts", "Pipeline", "Tasks"].map((item) => (
            <button key={item} className={`nav-item ${section === item ? "active" : ""}`} onClick={() => setSection(item)}>
              <span className={`nav-symbol symbol-${item.toLowerCase()}`} aria-hidden="true" />
              {item}
              {item === "Tasks" && <span className="nav-count">3</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-section">
          <p>Workspace</p>
          <button className="workspace-row"><span className="workspace-avatar">N</span><span><strong>Nective</strong><small>6 members</small></span><b>···</b></button>
        </div>
        <div className="sidebar-footer">
          <button className="invite-button">＋ Invite teammates</button>
          <div className="profile-row"><span className="profile-avatar">NP</span><span><strong>noiseparser</strong><small>Admin</small></span><button aria-label="Open profile menu">•••</button></div>
        </div>
      </aside>

      <main>
        <header className="topbar">
          <div className="search-wrap"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search accounts, contacts, or deals…" aria-label="Search" /><kbd>⌘ K</kbd></div>
          <button className="icon-button" aria-label="Notifications">○<span className="notification-dot" /></button>
          <button className="primary-button">＋ New account</button>
        </header>

        <div className="content">
          <section className="page-heading">
            <div><p className="eyebrow">Thursday, August 20</p><h1>{section === "Overview" ? "Good morning, Zack" : section}</h1><p>{section === "Overview" ? "Here’s what’s happening across your client portfolio." : `Everything your team needs to manage ${section.toLowerCase()}.`}</p></div>
            <div className="heading-actions"><button>Last 30 days⌄</button><button>Export</button></div>
          </section>

          {section === "Overview" && (
            <>
              <section className="metric-grid" aria-label="Portfolio summary">
                <Metric label="Active accounts" value="24" delta="+3 this month" trend="up" />
                <Metric label="Open pipeline" value="$486k" delta="12 active deals" trend="neutral" />
                <Metric label="Follow-ups due" value="7" delta="3 due today" trend="warn" />
                <Metric label="Portfolio health" value="91%" delta="+4% from July" trend="up" />
              </section>

              <section className="dashboard-grid">
                <div className="card pipeline-card">
                  <CardHeader title="Pipeline" subtitle="$486k across 12 active deals" action="View pipeline" />
                  <div className="stage-bar"><span style={{ width: "18%" }} /><span style={{ width: "24%" }} /><span style={{ width: "27%" }} /><span style={{ width: "31%" }} /></div>
                  <div className="stage-legend"><span><i className="dot gray" />Qualified <b>$88k</b></span><span><i className="dot blue" />Discovery <b>$116k</b></span><span><i className="dot violet" />Proposal <b>$132k</b></span><span><i className="dot green" />Negotiation <b>$150k</b></span></div>
                  <AccountTable accounts={filtered.slice(0, 4)} onSelect={setSelected} compact />
                </div>

                <div className="card activity-card">
                  <CardHeader title="Recent activity" subtitle="Latest across your workspace" />
                  <div className="activity-list">
                    {activities.map((activity) => <div className="activity" key={activity.action}><span className={`activity-avatar ${activity.tone}`}>{activity.initials}</span><p><strong>{activity.person}</strong> {activity.action}<small>{activity.time}</small></p></div>)}
                  </div>
                  <button className="card-link">View all activity</button>
                </div>

                <div className="card tasks-card">
                  <CardHeader title="Follow-ups" subtitle="4 items need attention" action="View tasks" />
                  <div className="task-list">
                    {tasks.map((task) => <label className={task.done ? "task done" : "task"} key={task.id}><input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} /><span><strong>{task.label}</strong><small>{task.meta}</small></span></label>)}
                  </div>
                </div>

                <div className="card health-card">
                  <CardHeader title="Account health" subtitle="Based on activity and momentum" action="View accounts" />
                  <div className="health-summary"><div className="health-ring"><span>91<small>%</small></span></div><div><strong>Portfolio is healthy</strong><p>21 of 24 accounts are on track</p></div></div>
                  <div className="health-rows"><span><i className="dot green" />Strong <b>17</b></span><span><i className="dot amber" />Watch <b>4</b></span><span><i className="dot red" />At risk <b>3</b></span></div>
                </div>
              </section>
            </>
          )}

          {section === "Accounts" && <section className="card full-table"><CardHeader title="Client accounts" subtitle={`${filtered.length} accounts shown`} action="＋ Add account" /><AccountTable accounts={filtered} onSelect={setSelected} /></section>}

          {section === "Pipeline" && <section className="board">{["Qualified", "Discovery", "Proposal", "Negotiation"].map((stage) => <div className="board-column" key={stage}><div className="board-title"><span>{stage}</span><b>{accounts.filter((account) => account.stage === stage).length}</b></div>{accounts.filter((account) => account.stage === stage).map((account) => <button className="deal-card" onClick={() => setSelected(account)} key={account.name}><span className={`health-pill ${account.health.toLowerCase().replace(" ", "-")}`}>{account.health}</span><strong>{account.name}</strong><small>{account.contact}</small><footer><b>{money(account.value)}</b><span>{account.owner}</span></footer></button>)}</div>)}</section>}

          {section === "Tasks" && <section className="card full-tasks"><CardHeader title="All follow-ups" subtitle={`${tasks.filter((task) => !task.done).length} remaining`} action="＋ New task" /><div className="task-list">{tasks.map((task) => <label className={task.done ? "task done" : "task"} key={task.id}><input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} /><span><strong>{task.label}</strong><small>{task.meta}</small></span></label>)}</div></section>}
        </div>
      </main>

      {selected && <div className="drawer-backdrop" onMouseDown={() => setSelected(null)}><aside className="account-drawer" onMouseDown={(event) => event.stopPropagation()} aria-label={`${selected.name} account details`}><button className="drawer-close" onClick={() => setSelected(null)} aria-label="Close account details">×</button><span className={`health-pill ${selected.health.toLowerCase().replace(" ", "-")}`}>{selected.health}</span><h2>{selected.name}</h2><a href={`https://${selected.domain}`}>{selected.domain}</a><div className="drawer-stats"><div><small>Deal value</small><strong>{money(selected.value)}</strong></div><div><small>Stage</small><strong>{selected.stage}</strong></div></div><h3>Primary contact</h3><div className="contact-card"><span>{selected.contact.split(" ").map((part) => part[0]).join("")}</span><div><strong>{selected.contact}</strong><small>Decision maker</small></div></div><h3>Next step</h3><p className="next-step">{selected.next}</p><button className="primary-button drawer-action">Open account</button></aside></div>}
    </div>
  );
}

function Metric({ label, value, delta, trend }: { label: string; value: string; delta: string; trend: string }) {
  return <article className="metric-card"><div className="metric-top"><span>{label}</span><button aria-label={`More options for ${label}`}>•••</button></div><strong>{value}</strong><small className={trend}>{trend === "up" ? "↗" : trend === "warn" ? "●" : "—"} {delta}</small></article>;
}

function CardHeader({ title, subtitle, action }: { title: string; subtitle: string; action?: string }) {
  return <header className="card-header"><div><h2>{title}</h2><p>{subtitle}</p></div>{action && <button>{action} →</button>}</header>;
}

function AccountTable({ accounts: rows, onSelect, compact = false }: { accounts: Account[]; onSelect: (account: Account) => void; compact?: boolean }) {
  return <div className={`account-table ${compact ? "compact" : ""}`}><div className="table-row table-head"><span>Account</span><span>Stage</span><span>Health</span><span>Value</span><span /></div>{rows.map((account) => <button className="table-row" key={account.name} onClick={() => onSelect(account)}><span className="account-cell"><i>{account.name.split(" ").map((part) => part[0]).join("")}</i><span><strong>{account.name}</strong><small>{account.domain}</small></span></span><span>{account.stage}</span><span><b className={`health-pill ${account.health.toLowerCase().replace(" ", "-")}`}>{account.health}</b></span><span className="value-cell">{money(account.value)}</span><span>›</span></button>)}</div>;
}
