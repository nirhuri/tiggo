"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPassword = exports.hashPassword = void 0;
const error_handling_1 = require("@practica/error-handling");
const bcrypt_1 = __importDefault(require("bcrypt"));
async function hashPassword(password) {
    try {
        const saltRounds = 10;
        const salt = await bcrypt_1.default.genSalt(saltRounds);
        const hashedPassword = await bcrypt_1.default.hash(password, salt);
        return hashedPassword;
    }
    catch (err) {
        throw new error_handling_1.AppError('encryption-error', 'Can not encrypt password', 500, true);
    }
}
exports.hashPassword = hashPassword;
async function checkPassword(password, hashedPassword) {
    const isSamePassword = await bcrypt_1.default.compare(password, hashedPassword);
    return isSamePassword;
}
exports.checkPassword = checkPassword;
