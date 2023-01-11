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
exports.signinUser = void 0;
const error_handling_1 = require("@practica/error-handling");
const user_schema_1 = require("./user-schema");
const encryption_service_1 = require("./encryption-service");
const signin_user_dto_1 = require("./dto/signin-user-dto");
const userRepository = __importStar(require("../data-access/repositories/users-repository"));
const index_1 = require("../../../libraries/auth/index");
async function signinUser(user) {
    validateSigninUserRequest(user);
    const savedUser = await userRepository.getUserByEmail(user.email);
    if (!savedUser) {
        throw new error_handling_1.AppError('user-signin-error', 'User does not exist', 400, true);
    }
    const { id, email, password, first_name, last_name, full_name, role_type, role_title, } = savedUser;
    const isValidPassword = await (0, encryption_service_1.checkPassword)(user.password, password);
    if (!isValidPassword) {
        throw new error_handling_1.AppError('signin-user-error', 'Invalid Password', 400, true);
    }
    const token = (0, index_1.generateJwtToken)(id, email, 'privateJwtKey');
    return new signin_user_dto_1.SigninUserDto(id, first_name, last_name, full_name, email, role_type, role_title, token);
}
exports.signinUser = signinUser;
function validateSigninUserRequest(user) {
    const AjvSchemaValidator = (0, user_schema_1.getSigninUserValidator)();
    // @ts-expect-error TODO: fix this type error
    const isValid = AjvSchemaValidator(user);
    if (!isValid) {
        throw new error_handling_1.AppError('invalid-credentials', 'Validation failed', 400, true);
    }
}
