import { DataTypes } from 'sequelize';
import getDbConnection from '../db-connection';

export default function getUserModel() {
  return getDbConnection().define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role_id: {
        type: DataTypes.INTEGER,
        references: {
          model: { tableName: 'roles' },
          key: 'id',
        },
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['email'],
        },
      ],
      underscored: true,
    }
  );
}

function getRoleModel() {
  return getDbConnection().define(
    'roles',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['type'],
        },
      ],
      underscored: true,
    }
  );
}

const Users = getUserModel();
const Roles = getRoleModel();

// Users.sync();
// Roles.sync();

Users.belongsTo(Roles, { foreignKey: 'role_id', as: 'roleId' });
Roles.hasMany(Users, { foreignKey: 'role_id' });
