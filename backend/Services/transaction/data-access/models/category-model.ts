import { DataTypes } from 'sequelize';
import getDbConnection from '../db-connection';
import { getCashTransactionModel } from './cash-transaction-model';

export default function getCategoriesModel() {
  const CategoryModel = getDbConnection().define(
    'categories',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      accountId: {
        type: DataTypes.UUID,
        unique: true,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      indexes: [
        {
          unique: false,
          fields: ['accountId', 'createdAt'],
        },
      ],
    }
  );

  CategoryModel.belongsTo(getCashTransactionModel());

  return CategoryModel;
}
