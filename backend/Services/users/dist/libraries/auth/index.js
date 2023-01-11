"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJwtToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJwtToken = (userId, email, privateKey) => {
    const token = jsonwebtoken_1.default.sign({ id: userId, email, time: Date.now() }, privateKey);
    return token;
};
exports.generateJwtToken = generateJwtToken;
