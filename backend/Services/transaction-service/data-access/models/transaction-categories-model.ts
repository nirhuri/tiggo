import { DataTypes } from 'sequelize';
import getDbConnection from '../db-connection';

export default function getTransactionCategoriesModel() {
  return getDbConnection().define(
    'transaction_categories',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,

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
      accountId: {
        type: DataTypes.UUID,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      categories: {
        type: DataTypes.JSON,
      },
    },
    {
      indexes: [
        {
          unique: false,
          fields: ['accountId'],
        },
      ],
    }
  );
}
