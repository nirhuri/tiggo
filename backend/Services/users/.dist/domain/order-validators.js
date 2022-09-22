"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertNewOrderIsValid = void 0;
const error_handling_1 = require("@practica/error-handling");
const validation_1 = __importDefault(require("@practica/validation"));
const order_schema_1 = require("./order-schema");
function assertNewOrderIsValid(newOrderRequest) {
    // Since compiling a validation schema is expensive, we always try to use the cached version first
    let validationSchema;
    validationSchema = validation_1.default.getSchema('new-order');
    if (!validationSchema) {
        validation_1.default.addSchema(order_schema_1.orderSchema, 'new-order');
        validationSchema = validation_1.default.getSchema('new-order');
    }
    if (validationSchema === undefined) {
        throw new error_handling_1.AppError('unpredictable-validation-failure', 'An internal validation error occurred where schemas cant be obtained', 500, false);
    }
    const isValid = validationSchema(newOrderRequest);
    if (!isValid) {
        throw new error_handling_1.AppError('invalid-order', `Validation failed`, 400, true);
    }
}
exports.assertNewOrderIsValid = assertNewOrderIsValid;
