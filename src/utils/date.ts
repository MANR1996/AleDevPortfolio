export function getYearsSince(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const hasAnniversaryPassed =
    now.getMonth() > start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate());
  if (!hasAnniversaryPassed) {
    years -= 1;
  }
  return Math.max(years, 0);
}
