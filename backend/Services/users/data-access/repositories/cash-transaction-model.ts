import { DataTypes } from 'sequelize';
import getDbConnection from '../db-connection';

export default function getTransactionModel() {
  return getDbConnection().define(
    'cash_transaction',
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
      businessName: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.UUID,
        unique: true,
        allowNull: false
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.ENUM('WITHDRAW', 'DEPOSITE'),
        allowNull: false
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
  );
}
