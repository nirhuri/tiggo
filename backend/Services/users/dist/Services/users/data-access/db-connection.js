"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// ️️️✅ Best Practice: Keep a singleton DB connection pool in a process
let dbConnection;
function getDbConnection() {
    if (!dbConnection) {
        dbConnection = new sequelize_1.Sequelize({
            dialect: 'postgres',
            database: 'users',
            username: 'postgres',
            password: '',
            host: '0.0.0.0',
            port: 5432,
        }
        // configurationProvider.getValue('DB.dbName'),
        // configurationProvider.getValue('DB.userName'),
        // configurationProvider.getValue('DB.password'),
        // sequelizeConfig as Options
        );
    }
    return dbConnection;
}
exports.default = getDbConnection;
