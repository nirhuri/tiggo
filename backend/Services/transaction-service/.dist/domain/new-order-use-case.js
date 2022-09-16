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
exports.getOrder = exports.deleteOrder = exports.addOrder = void 0;
const axios_1 = __importDefault(require("axios"));
const error_handling_1 = require("@practica/error-handling");
const orderRepository = __importStar(require("../data-access/repositories/order-repository"));
const payment_terms_service_1 = __importDefault(require("./payment-terms-service"));
const order_schema_1 = require("./order-schema");
// ️️️✅ Best Practice: Start a flow with a 'use case' function that summarizes the flow in high-level
// This function should orchestrate multiple services and repositories
async function addOrder(newOrder) {
    validateNewOrderRequest(newOrder);
    const userWhoOrdered = await getUserOrThrowIfNotExist(newOrder.userId);
    payment_terms_service_1.default.determinePaymentTerms(newOrder.paymentTermsInDays, userWhoOrdered.terms);
    const response = await orderRepository.addOrder(newOrder);
    return response;
}
exports.addOrder = addOrder;
async function getUserOrThrowIfNotExist(userId) {
    const userVerificationRequest = await axios_1.default.get(`http://localhost/user/${userId}`, {
        validateStatus: () => true,
    });
    if (userVerificationRequest.status !== 200) {
        throw new error_handling_1.AppError('user-doesnt-exist', `The user ${userId} doesnt exist`, userVerificationRequest.status, true);
    }
    return userVerificationRequest.data;
}
function validateNewOrderRequest(newOrderRequest) {
    const AjvSchemaValidator = (0, order_schema_1.getNewOrderValidator)();
    // @ts-expect-error TODO: fix this type error
    const isValid = AjvSchemaValidator(newOrderRequest);
    if (!isValid) {
        throw new error_handling_1.AppError('invalid-order', `Validation failed`, 400, true);
    }
}
async function deleteOrder(userId) {
    return await orderRepository.deleteOrder(userId);
}
exports.deleteOrder = deleteOrder;
async function getOrder(userId) {
    return await orderRepository.getOrderById(userId);
}
exports.getOrder = getOrder;
