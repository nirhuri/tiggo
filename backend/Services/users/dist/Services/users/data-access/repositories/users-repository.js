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
exports.cleanupData = exports.deleteUser = exports.saveUser = exports.getUserByEmail = exports.getUserById = void 0;
const sequelize_1 = __importStar(require("sequelize"));
const db_connection_1 = __importDefault(require("../db-connection"));
const users_model_1 = __importDefault(require("../models/users-model"));
async function getUserById(id) {
    return await (0, users_model_1.default)().findOne({ where: { id } });
}
exports.getUserById = getUserById;
async function getUserByEmail(email) {
    const query = 
    // eslint-disable-next-line no-multi-str
    'SELECT users.id, users.email, users.password, users.first_name, users.last_name, \
    users.full_name, users.created_at, users.updated_at, roles.title as role_title, \
    roles.type as role_type FROM users LEFT JOIN roles ON users.role_id = roles.id \
    WHERE email =:email;';
    const dbConnection = (0, db_connection_1.default)();
    const user = await dbConnection.query(query, {
        replacements: { email },
        raw: true,
        type: sequelize_1.default.QueryTypes.SELECT,
    });
    return user[0];
}
exports.getUserByEmail = getUserByEmail;
async function saveUser(user) {
    const date = new Date();
    const query = 
    // eslint-disable-next-line no-multi-str
    `WITH inserted_user as (INSERT INTO users ( 
    email, first_name, last_name, full_name, password, role_id, created_at, updated_at
    ) VALUES ($email, $first_name, $last_name, $full_name, $password, $role_id, $created_at, $updated_at) RETURNING *) 
    SELECT inserted_user.id, inserted_user.email, inserted_user.password, inserted_user.first_name, inserted_user.last_name,
    inserted_user.full_name, inserted_user.created_at, inserted_user.updated_at, roles.title as role_title, 
    roles.type as role_type FROM inserted_user LEFT JOIN roles ON inserted_user.role_id = roles.id;`;
    const dbConnection = await (0, db_connection_1.default)();
    const savedUser = await dbConnection.query(query, {
        bind: {
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            full_name: user.full_name,
            password: user.password,
            role_id: user.role_id,
            created_at: date,
            updated_at: date,
        },
        raw: true,
        type: sequelize_1.QueryTypes.RAW,
    });
    return savedUser[0][0];
}
exports.saveUser = saveUser;
async function deleteUser(userIdToDelete) {
    await (0, users_model_1.default)().destroy({ where: { id: userIdToDelete } });
}
exports.deleteUser = deleteUser;
async function cleanupData() {
    await (0, users_model_1.default)().truncate();
}
exports.cleanupData = cleanupData;
