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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("util"));
const express_1 = __importDefault(require("express"));
const logger_1 = require("@practica/logger");
const newUserUseCase = __importStar(require("../../domain/new-user-use-case"));
const signinUserUseCase = __importStar(require("../../domain/signin-user-use-case"));
const getUserUseCase = __importStar(require("../../domain/get-user-use-case"));
const http_status_codes_1 = require("../../../../libraries/http/http-status-codes");
function defineRoutes(expressApp) {
    const router = express_1.default.Router();
    router.post('/signup', async (req, res, next) => {
        try {
            logger_1.logger.info(`User API was called to add new user ${util_1.default.inspect(req.body)}`);
            const newUserResponse = await newUserUseCase.createNewUser(req.body);
            return res.status(http_status_codes_1.HTTP_CODES.CREATED).json(newUserResponse);
        }
        catch (error) {
            return next(error);
        }
    });
    router.post('/signin', async (req, res, next) => {
        try {
            logger_1.logger.info(`User API was called to add new user ${util_1.default.inspect(req.body)}`);
            const signedinUser = await signinUserUseCase.signinUser(req.body);
            return res.status(http_status_codes_1.HTTP_CODES.OK).json(signedinUser);
        }
        catch (error) {
            return next(error);
        }
    });
    router.get('/:email', async (req, res, next) => {
        try {
            logger_1.logger.info(`User API was called to add new user ${util_1.default.inspect(req.body)}`);
            const user = await getUserUseCase.getByEmail(req.params.email);
            return res.status(http_status_codes_1.HTTP_CODES.OK).json(user);
        }
        catch (error) {
            return next(error);
        }
    });
    expressApp.use('/users', router);
}
exports.default = defineRoutes;
