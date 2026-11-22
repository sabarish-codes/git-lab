import { Router } from "express";
import { orders } from "../data/orders";

export const ordersRouter = Router();

ordersRouter.get("/", (_req, res) => {
  res.json(orders);
});
