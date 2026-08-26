export function relationshipStrength({ meaningfulTouches, daysSinceLastTouch }) {
  const activity = Math.min(meaningfulTouches * 8, 64);
  const recency = Math.max(0, 36 - daysSinceLastTouch * 2);
  return Math.min(100, activity + recency);
}
