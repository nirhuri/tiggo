import { errorHandler } from "@hurinir/common";
import express from "express";
import { useExpressServer } from "routing-controllers";
import { TransactionController } from "../application/controllers/transaction-controller";
import { App } from "./app";
import { container } from "./config/inversify.config";
import { TYPES } from "./types/inversify.types";

require("dotenv").config();

const PORT = Number(process.env.PORT) || 3000;

const app = new App({
  port: PORT,
  middleWares: [express.json(), express.urlencoded({ extended: true })],
}).app;

useExpressServer(app, {
  controllers: [TransactionController]
})

app.listen(() => {
  console.log(`Transaction service run on port: ${PORT}`);
});
