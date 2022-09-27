"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.orderSchema = typebox_1.Type.Object({
    deliveryAddress: typebox_1.Type.String(),
    paymentTermsInDays: typebox_1.Type.Number(),
    productId: typebox_1.Type.Integer(),
    userId: typebox_1.Type.Integer(),
});
