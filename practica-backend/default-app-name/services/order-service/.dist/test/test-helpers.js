"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleSecret = exports.signExpiredToken = exports.signValidToken = exports.signValidTokenWithDefaultUser = exports.getAxiosInstance = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const axios_1 = __importDefault(require("axios"));
const getAxiosInstance = (address) => {
    const axiosConfig = {
        baseURL: `http://127.0.0.1:${address.port}`,
        Headers: {
            'content-type': 'application/json',
            authorization: 'Bearer...',
        },
    };
    return axios_1.default.create(axiosConfig);
};
exports.getAxiosInstance = getAxiosInstance;
function signValidTokenWithDefaultUser() {
    return internalSignTokenSynchronously('joe', 'admin', Date.now() + 60 * 60);
}
exports.signValidTokenWithDefaultUser = signValidTokenWithDefaultUser;
function signValidToken(user, role) {
    return internalSignTokenSynchronously(user, role, Date.now() + 60 * 60);
}
exports.signValidToken = signValidToken;
function signExpiredToken(user, role) {
    return internalSignTokenSynchronously(user, role, 0);
}
exports.signExpiredToken = signExpiredToken;
function internalSignTokenSynchronously(user, roles, expirationInUnixTime) {
    const token = jsonwebtoken_1.default.sign({
        exp: expirationInUnixTime,
        data: {
            user,
            roles,
        },
    }, exports.exampleSecret);
    return token;
}
exports.exampleSecret = 'secret';
