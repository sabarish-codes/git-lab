import express from "express";
import { config } from "./config";
import { ordersRouter } from "./routes/orders";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/orders", ordersRouter);

app.listen(config.port, () => console.log(`orders-api listening on ${config.port}`));
