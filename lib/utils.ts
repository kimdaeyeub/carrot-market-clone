export function formatToWon(price: number): string {
  return price.toLocaleString("ko-KR");
}

export function formatToTimeAgo(date: string): string {
  const time = new Date(date).getTime();
  const now = new Date().getTime();
  const dayInMs = 1000 * 60 * 60 * 24;
  const diff = Math.round((time - now) / dayInMs);

  const formatter = new Intl.RelativeTimeFormat("ko");
  return formatter.format(diff, "days");
}
