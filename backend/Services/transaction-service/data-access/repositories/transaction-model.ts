import { DataTypes } from 'sequelize';
import getDbConnection from '../db-connection';

export default function getTransactionModel() {
  return getDbConnection().define('Transactions', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    businessName: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.UUID,
      unique: true,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.ENUM('WITHDRAW', 'DEPOSITE'),
    },
  });
}
