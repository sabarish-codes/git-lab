export function isValidTotal(total: unknown): total is number {
  return typeof total === "number" && total > 0;
}

export function isValidStatus(status: unknown): boolean {
  return status === "pending" || status === "paid" || status === "shipped";
}
export function isValidCustomer(c: unknown): c is string { return typeof c === "string" && c.length > 0; }
