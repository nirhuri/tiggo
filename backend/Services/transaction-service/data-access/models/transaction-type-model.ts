import { DataTypes } from 'sequelize';
import getDbConnection from '../db-connection';

export default function getTransactionModel() {
  return getDbConnection().define(
    'transaction_type',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      createdAt: {
          type: DataTypes.DATE,
          allowNull: false
      },
      updatedAt: {
          type: DataTypes.DATE,
          allowNull: false
      },
      type: {
        type: DataTypes.ENUM('WITHDRAW', 'DEPOSITE'),
      },
    },
  );
}
