import express from "express";
import { App } from "./app";
import { createTypeORMConnection } from "./config/typeorm-config";

require("dotenv").config();

const PORT = Number(process.env.PORT) || 3003;

createTypeORMConnection();

new App(PORT).listen();