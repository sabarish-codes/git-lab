export interface Order {
  id: number;
  customer: string;
  total: number;
  status: "pending" | "paid" | "shipped";
}

export const orders: Order[] = [
  { id: 1, customer: "Asha", total: 1200, status: "paid" },
  { id: 2, customer: "Ravi", total: 450, status: "pending" },
  { id: 3, customer: "Meena", total: 980, status: "shipped" },
];
