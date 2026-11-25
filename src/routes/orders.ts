import { Router } from "express";
import { orders } from "../data/orders";
import { isValidTotal } from "../utils/validate";

export const ordersRouter = Router();

ordersRouter.get("/", (req, res) => {
  const { status } = req.query;
  const result = status ? orders.filter((o) => o.status === status) : orders;
  res.json(result);
});

ordersRouter.get("/:id", (req, res) => {
  const order = orders.find((o) => o.id === Number(req.params.id));
  if (!order) {
    res.status(404).json({ error: "not found" });
    return;
  }
  res.json(order);
});

ordersRouter.post("/", (req, res) => {
  const { customer, total } = req.body;
  if (!customer || !isValidTotal(total)) {
    res.status(400).json({ error: "invalid order" });
    return;
  }
  const order = { id: orders.length + 1, customer, total, status: "pending" as const };
  orders.push(order);
  res.status(201).json(order);
});

ordersRouter.delete("/:id", (req, res) => {
  const index = orders.findIndex((o) => o.id === Number(req.params.id));
  if (index === -1) {
    res.status(404).json({ error: "not found" });
    return;
  }
  orders.splice(index, 1);
  res.status(204).send();
});
