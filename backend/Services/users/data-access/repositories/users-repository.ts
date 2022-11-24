import sequelize from 'sequelize';
import getDbConnection from '../db-connection';
import UserModel from '../models/users-model';

// ️️️✅ Best Practice: The repository pattern - Wrap the entire DB layer with a simple interface that returns plain JS objects
export async function getUserById(id: number) {
  return await UserModel().findOne({ where: { id } });
}

export async function getUserByEmail(email: string) {
  const query =
    // eslint-disable-next-line no-multi-str
    'SELECT users.id, users.email, users.password, users.first_name, users.last_name, \
    users.full_name, users.created_at, users.updated_at, roles.title as role_title, \
    roles.type as role_type FROM users LEFT JOIN roles ON users.role_id = roles.id \
    WHERE email =:email';
  const dbConnection = getDbConnection();
  const user = await dbConnection.query(query, {
    replacements: { email },
    raw: true,
    type: sequelize.QueryTypes.SELECT,
  });
  return user[0];
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
