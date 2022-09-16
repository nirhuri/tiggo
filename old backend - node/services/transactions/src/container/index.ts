import { container } from "./config/inversify-config";
import express from "express";
import { App } from "./app";
import { createTypeORMConnection } from "./config/typeorm-config";
import { TransactionController } from "../application/rest/transaction-controller";
import { TYPES } from './types/inversify-types';

require("dotenv").config();

const PORT = Number(process.env.PORT) || 3003;

const transactionController = container.get<TransactionController>(
  TYPES.TransactionController
);

createTypeORMConnection();

const app = new App({
  port: PORT,
  controllers: [transactionController],
  middleWares: [express.json(), express.urlencoded({ extended: true })],
});

app.listen();
