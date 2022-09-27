import { DataTypes } from 'sequelize';
import getDbConnection from '../db-connection';
import { getCashTransactionModel } from './cash-transaction-model';

export function getTransactionActionModel() {
  const TransactionActionModel = getDbConnection().define(
    'transaction_action',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID,
        primaryKey: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      action: {
        type: DataTypes.ENUM('WITHDRAW', 'DEPOSITE'),
      },
    }
  );

  TransactionActionModel.belongsTo(getCashTransactionModel());

  return TransactionActionModel;
}
