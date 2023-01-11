"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSigninUserValidator = exports.getNewUserValidator = exports.signinUserSchema = exports.addUserSchema = void 0;
const validation_1 = __importDefault(require("@practica/validation"));
const typebox_1 = require("@sinclair/typebox");
exports.addUserSchema = typebox_1.Type.Object({
    email: typebox_1.Type.String(),
    firstName: typebox_1.Type.String(),
    lastName: typebox_1.Type.String(),
    fullName: typebox_1.Type.String(),
    password: typebox_1.Type.String(),
    roleId: typebox_1.Type.Integer(),
});
exports.signinUserSchema = typebox_1.Type.Object({
    email: typebox_1.Type.String(),
    password: typebox_1.Type.String(),
});
function getNewUserValidator() {
    const validator = validation_1.default.getSchema('new-user');
    if (!validator) {
        validation_1.default.addSchema(exports.addUserSchema, 'new-user');
    }
    return validation_1.default.getSchema('new-user');
}
exports.getNewUserValidator = getNewUserValidator;
function getSigninUserValidator() {
    const validator = validation_1.default.getSchema('signin-user');
    if (!validator) {
        validation_1.default.addSchema(exports.signinUserSchema, 'signin-user');
    }
    return validation_1.default.getSchema('signin-user');
}
exports.getSigninUserValidator = getSigninUserValidator;
