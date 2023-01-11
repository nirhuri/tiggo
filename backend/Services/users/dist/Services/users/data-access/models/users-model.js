"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = __importDefault(require("../db-connection"));
function getUserModel() {
    return (0, db_connection_1.default)().define('users', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        first_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        full_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        role_id: {
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: { tableName: 'roles' },
                key: 'id',
            },
        },
    }, {
        indexes: [
            {
                unique: true,
                fields: ['email'],
            },
        ],
        underscored: true,
    });
}
exports.default = getUserModel;
function getRoleModel() {
    return (0, db_connection_1.default)().define('roles', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        indexes: [
            {
                unique: true,
                fields: ['type'],
            },
        ],
        underscored: true,
    });
}
const Users = getUserModel();
const Roles = getRoleModel();
// Users.sync();
// Roles.sync();
Users.belongsTo(Roles, { foreignKey: 'role_id', as: 'roleId' });
Roles.hasMany(Users, { foreignKey: 'role_id' });
