export function formatRelative(data: Date): string {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - data.getTime()) / 1000);
  if (seconds < 5) return "now";
  if (seconds < 60) return `${seconds} seconds ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minutes ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hours ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} days ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 52) return `${weeks} weeks ago`;
  const years = Math.floor(weeks / 52);
  if (years < 10) return `${years} years ago`;
  const decades = Math.floor(years / 10);
  return `${decades} decades ago`;
}