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
const orderRepository = __importStar(require("../data-access/repositories/order-repository"));
const payment_terms_service_1 = __importDefault(require("./payment-terms-service"));
const order_validators_1 = require("./order-validators");
const user_service_client_1 = require("./user-service-client");
// new-order-use-case.ts
// ️️️✅ Best Practice: Start a flow with a 'use case' function that summarizes the flow in high-level
// It should merely tell the feature story without too much information. Kind of a yellow pages of the module
// This kind of function typically  orchestrates multiple services and repositories
async function addOrder(newOrder) {
    (0, order_validators_1.assertNewOrderIsValid)(newOrder);
    const userWhoOrdered = await (0, user_service_client_1.assertUserExists)(newOrder.userId);
    const finalOrderToSave = { ...newOrder };
    const approvedPaymentTerms = payment_terms_service_1.default.determinePaymentTerms(finalOrderToSave.paymentTermsInDays, userWhoOrdered.terms);
    finalOrderToSave.paymentTermsInDays = approvedPaymentTerms;
    const response = await orderRepository.addOrder(finalOrderToSave);
    return response;
}
exports.addOrder = addOrder;
async function deleteOrder(userId) {
    return await orderRepository.deleteOrder(userId);
}
exports.deleteOrder = deleteOrder;
async function getOrder(userId) {
    return await orderRepository.getOrderById(userId);
}
exports.getOrder = getOrder;
