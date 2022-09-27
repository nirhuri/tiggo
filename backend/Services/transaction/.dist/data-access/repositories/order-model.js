"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = __importDefault(require("../db-connection"));
function getOrderModel() {
    return (0, db_connection_1.default)().define('Order', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        externalIdentifier: {
            type: sequelize_1.DataTypes.STRING,
            unique: true,
            allowNull: true,
        },
        deliveryAddress: {
            type: sequelize_1.DataTypes.STRING,
        },
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        paymentTermsInDays: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        productId: {
            type: sequelize_1.DataTypes.INTEGER,
        },
    });
}
exports.default = getOrderModel;
