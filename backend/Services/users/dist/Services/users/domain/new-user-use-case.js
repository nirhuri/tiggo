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
exports.createNewUser = void 0;
const error_handling_1 = require("@practica/error-handling");
const userRepository = __importStar(require("../data-access/repositories/users-repository"));
const user_schema_1 = require("./user-schema");
const encryption_service_1 = require("./encryption-service");
const create_user_dto_1 = require("./dto/create-user-dto");
const index_1 = require("../../../libraries/auth/index");
const create_user_dao_1 = require("../data-access/dao/create-user-dao");
async function createNewUser(newUser) {
    newUser.fullName = `${newUser.firstName} ${newUser.lastName}`;
    validateNewUserRequest(newUser);
    const isUserExist = await userRepository.getUserByEmail(newUser.email);
    if (isUserExist) {
        throw new error_handling_1.AppError('user-create-error', 'User with this email already exist', 409, true);
    }
    const encryptedPassword = await (0, encryption_service_1.hashPassword)(newUser.password);
    newUser.password = String(encryptedPassword);
    const savedUser = await userRepository.saveUser(new create_user_dao_1.CreateUserDao(newUser).dtoToDao());
    const { id, first_name, last_name, full_name, email } = savedUser;
    const token = (0, index_1.generateJwtToken)(id, email, 'privateJwtKey');
    return new create_user_dto_1.CreateUserDto(id, first_name, last_name, full_name, email, token);
}
exports.createNewUser = createNewUser;
function validateNewUserRequest(newUserRequest) {
    const AjvSchemaValidator = (0, user_schema_1.getNewUserValidator)();
    // @ts-expect-error TODO: fix this type error
    const isValid = AjvSchemaValidator(newUserRequest);
    if (!isValid) {
        throw new error_handling_1.AppError('invalid-user', `Validation failed`, 400, true);
    }
}
