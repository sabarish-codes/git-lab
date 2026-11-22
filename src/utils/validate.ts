export function isValidTotal(total: unknown): total is number {
  return typeof total === "number" && total > 0;
}
