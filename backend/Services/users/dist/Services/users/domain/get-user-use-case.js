"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByEmail = void 0;
const error_handling_1 = require("@practica/error-handling");
const http_status_codes_1 = require("../../../libraries/http/http-status-codes");
const userRepository = __importStar(require("../data-access/repositories/users-repository"));
const get_user_dto_1 = require("./dto/get-user-dto");
const getByEmail = async (userEmail) => {
    validateGetUserRequest(userEmail);
    const user = await userRepository.getUserByEmail(userEmail);
    return new get_user_dto_1.GetUserDto(user.id, user.first_name, user.last_name, user.full_name, user.email, user.role_title, user.role_type, user.created_at, user.updated_at);
};
exports.getByEmail = getByEmail;
function validateGetUserRequest(userField) {
    if (!userField || typeof userField !== 'string') {
        throw new error_handling_1.AppError('invalid-data', 'wrong data provided', http_status_codes_1.HTTP_CODES.BAD_REQUEST, true);
    }
}
