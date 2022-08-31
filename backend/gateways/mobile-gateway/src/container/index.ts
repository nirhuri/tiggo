import { App } from "./app";
import "reflect-metadata";

require("dotenv").config();

const PORT = Number(process.env.PORT) || 3000;

new App(PORT).listen();