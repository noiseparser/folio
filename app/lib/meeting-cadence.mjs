const DAY = 24 * 60 * 60 * 1000;

export function meetingCadence(meetings) {
  const times = meetings.map((m) => new Date(m.at).getTime()).sort((a, b) => a - b);
  if (times.length < 2) return null;
  const gaps = times.slice(1).map((time, i) => (time - times[i]) / DAY);
  return Math.round(gaps.reduce((sum, gap) => sum + gap, 0) / gaps.length);
}
