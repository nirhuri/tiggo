import { errorHandler } from "@hurinir/common";
import express from "express";
import { useExpressServer } from "routing-controllers";
import { TransactionController } from "../application/controllers/transaction-controller";
import { App } from "./app";
import { createTypeORMConnection } from "./config/typeorm.config";

require("dotenv").config();

const PORT = Number(process.env.PORT) || 3000;

createTypeORMConnection();

new App({
  port: PORT,
  middleWares: [express.json(), express.urlencoded({ extended: true })],
}).listen();