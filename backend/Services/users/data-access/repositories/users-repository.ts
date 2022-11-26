import sequelize, { QueryTypes } from 'sequelize';
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
    WHERE email =:email;';
  const dbConnection = getDbConnection();
  const user = await dbConnection.query(query, {
    replacements: { email },
    raw: true,
    type: sequelize.QueryTypes.SELECT,
  });
  return user[0];
}

export async function saveUser(user) {
  const date = new Date();
  const query =
    // eslint-disable-next-line no-multi-str
    `WITH inserted_user as (INSERT INTO users ( 
    email, first_name, last_name, full_name, password, role_id, created_at, updated_at
    ) VALUES ($email, $first_name, $last_name, $full_name, $password, $role_id, $created_at, $updated_at) RETURNING *) 
    SELECT inserted_user.id, inserted_user.email, inserted_user.password, inserted_user.first_name, inserted_user.last_name,
    inserted_user.full_name, inserted_user.created_at, inserted_user.updated_at, roles.title as role_title, 
    roles.type as role_type FROM inserted_user LEFT JOIN roles ON inserted_user.role_id = roles.id;`;

  const dbConnection = await getDbConnection();
  const savedUser = await dbConnection.query(query, {
    bind: {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      full_name: user.full_name,
      password: user.password,
      role_id: user.role_id,
      created_at: date,
      updated_at: date,
    },
    raw: true,
    type: QueryTypes.RAW,
  });

  return savedUser[0][0];
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
