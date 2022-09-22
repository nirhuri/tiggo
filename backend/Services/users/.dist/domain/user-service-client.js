"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertUserExists = void 0;
const axios_1 = __importDefault(require("axios"));
const error_handling_1 = require("@practica/error-handling");
async function assertUserExists(userId) {
    const userVerificationRequest = await axios_1.default.get(`http://localhost/user/${userId}`, {
        validateStatus: () => true,
    });
    if (userVerificationRequest.status !== 200) {
        throw new error_handling_1.AppError('user-doesnt-exist', `The user ${userId} doesnt exist`, userVerificationRequest.status, true);
    }
    return userVerificationRequest.data;
}
exports.assertUserExists = assertUserExists;
