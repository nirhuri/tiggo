"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewOrderValidator = exports.addOrderSchema = void 0;
const validation_1 = __importDefault(require("@practica/validation"));
const typebox_1 = require("@sinclair/typebox");
exports.addOrderSchema = typebox_1.Type.Object({
    deliveryAddress: typebox_1.Type.String(),
    paymentTermsInDays: typebox_1.Type.Number(),
    productId: typebox_1.Type.Integer(),
    userId: typebox_1.Type.Integer(),
});
function getNewOrderValidator() {
    const validator = validation_1.default.getSchema('new-order');
    if (!validator) {
        validation_1.default.addSchema(exports.addOrderSchema, 'new-order');
    }
    return validation_1.default.getSchema('new-order');
}
exports.getNewOrderValidator = getNewOrderValidator;
