import { DataTypes } from 'sequelize';
import getDbConnection from '../db-connection';

export default function getUserModel() {
  return getDbConnection().define(
    'users',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      roleId: {
        type: DataTypes.UUID,
        references: {
          model: { tableName: 'roles' },
          key: 'id'
        }
      }
    },
    {
      indexes: [
        {
          unique: false,
          fields: ['email'],
        },
      ],
    }
  );
}

function getRoleModel() {
  return getDbConnection().define(
    'roles',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
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
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    },
    {
      indexes: [
        {
          unique: false,
          fields: ['type'],
        },
      ],
    }
  );
}

const Users = getUserModel();
const Roles = getRoleModel();

Users.belongsTo(Roles, { foreignKey: 'roleId', as: 'user_role'});
Roles.hasMany(Users);
