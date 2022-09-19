import { DataTypes } from 'sequelize';
import getDbConnection from '../db-connection';

export default function getTransactionModel() {
  return getDbConnection().define('cash_transaction', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE
    },
    businessName:  {
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
