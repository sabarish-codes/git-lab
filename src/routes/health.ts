import { Router } from "express";

export const healthRouter = Router();

healthRouter.get("/ready", (_req, res) => {
  res.json({ ready: true });
});
