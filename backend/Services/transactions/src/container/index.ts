import express from "express";
import { App } from "./app";
import { createTypeORMConnection } from "./config/typeorm.config";

require("dotenv").config();

const PORT = Number(process.env.PORT) || 3000;

createTypeORMConnection();

new App({
  port: PORT,
  middleWares: [express.json(), express.urlencoded({ extended: true })],
}).listen();