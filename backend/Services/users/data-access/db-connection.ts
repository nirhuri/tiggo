import { Sequelize, Options } from 'sequelize';
import * as configurationProvider from '@practica/configuration-provider';
import sequelizeConfig, { host, username } from './config/config';

// ️️️✅ Best Practice: Keep a singleton DB connection pool in a process
let dbConnection: Sequelize;

export default function getDbConnection() {
  if (!dbConnection) {
    dbConnection = new Sequelize(
      {
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
