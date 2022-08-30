import express from "express";
import { useExpressServer } from "routing-controllers";
import { App } from "./app";
import "reflect-metadata";

require('dotenv').config();

const PORT = Number(process.env.PORT) || 3000;

new App({
  port: PORT,
  middleWares: [express.json(), express.urlencoded({ extended: true })],
}).listen();


