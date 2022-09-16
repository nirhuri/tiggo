"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanupData = exports.deleteOrder = exports.addOrder = exports.getOrderById = void 0;
const order_model_1 = __importDefault(require("./order-model"));
// ️️️✅ Best Practice: The repository pattern - Wrap the entire DB layer with a simple interface that returns plain JS objects
async function getOrderById(id) {
    return await (0, order_model_1.default)().findOne({ where: { id } });
}
exports.getOrderById = getOrderById;
async function addOrder(orderDetails) {
    const addingResponse = await (0, order_model_1.default)().create(orderDetails);
    return addingResponse;
}
exports.addOrder = addOrder;
async function deleteOrder(orderIdToDelete) {
    await (0, order_model_1.default)().destroy({ where: { id: orderIdToDelete } });
}
exports.deleteOrder = deleteOrder;
async function cleanupData() {
    await (0, order_model_1.default)().truncate();
}
exports.cleanupData = cleanupData;
