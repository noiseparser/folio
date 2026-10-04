export function quotaAttainment(reps, deals) {
  return reps.map((rep) => {
    const booked = deals
      .filter((deal) => deal.ownerId === rep.id && deal.stage === "Closed won")
      .reduce((sum, deal) => sum + deal.value, 0);
    return { name: rep.name, booked, attainment: Math.round((booked / rep.quota) * 100) };
  });
}
