"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app_1 = require("./app");
var typeorm_config_1 = require("./config/typeorm.config");
require("dotenv").config();
var PORT = Number(process.env.PORT) || 3000;
(0, typeorm_config_1.createTypeORMConnection)();
new app_1.App({
    port: PORT,
    middleWares: [express_1.default.json(), express_1.default.urlencoded({ extended: true })],
}).listen();
