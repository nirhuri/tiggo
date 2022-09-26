import { DataTypes } from 'sequelize';
import getDbConnection from '../db-connection';

export default function getCategoriesModel() {
  return getDbConnection().define(
    'categories',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
}
