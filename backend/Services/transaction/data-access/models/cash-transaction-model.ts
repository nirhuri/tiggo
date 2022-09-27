import { DataTypes } from 'sequelize';
import getDbConnection from '../db-connection';
import getCategoriesModel from './category-model';
import { getTransactionActionModel } from './transaction-action-model';

export function getCashTransactionModel() {
  const CashTransaction = getDbConnection()
    .define(
      'cash_transactions',
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
        businessName: {
          type: DataTypes.STRING,
        },
        userId: {
          type: DataTypes.UUID,
          unique: true,
          allowNull: false,
        },
        amount: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING,
        },
      },
      {
        indexes: [
          {
            unique: false,
            fields: ['userId', 'type', 'createdAt'],
          },
        ],
      }
    )
  CashTransaction.hasOne(getCategoriesModel());
  CashTransaction.hasOne(getTransactionActionModel());
  return CashTransaction;
}
