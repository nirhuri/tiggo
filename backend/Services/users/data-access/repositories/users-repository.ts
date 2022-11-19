import sequelize from 'sequelize';
import getDbConnection from '../db-connection';
import UserModel from '../models/users-model';

// ️️️✅ Best Practice: The repository pattern - Wrap the entire DB layer with a simple interface that returns plain JS objects
export async function getUserById(id: number) {
  return await UserModel().findOne({ where: { id } });
}

export async function getUserByEmail(email: string) {
  const query1 = `SELECT * FROM users WHERE email=${email}`;
  const dbConnection = getDbConnection();
  return await dbConnection.query(query1, {
    type: sequelize.QueryTypes.SELECT,
  })[0];
  // return await UserModel().findOne({ where: { email } });
}

export async function addUser(userDetails) {
  const addingResponse = await UserModel().create(userDetails);
  return addingResponse;
}

export async function deleteUser(userIdToDelete: number) {
  await UserModel().destroy({ where: { id: userIdToDelete } });
}

export async function cleanupData() {
  await UserModel().truncate();
}
