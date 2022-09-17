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
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE
    },
    business_name: {
      type: DataTypes.STRING,
    },
    user_id: {
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
