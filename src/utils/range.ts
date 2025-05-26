export function range(end: number) {
  const results: number[] = [];
  for (let i = 1; i <= end; i++) {
    results.push(i);
  }
  return results;
}
