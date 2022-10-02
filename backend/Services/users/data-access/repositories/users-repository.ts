import UserModel from './users-model';

// ️️️✅ Best Practice: The repository pattern - Wrap the entire DB layer with a simple interface that returns plain JS objects
export async function getUserById(id: number) {
  return await UserModel().findOne({ where: { id } });
}

export async function getUserByEmail(email: string) {
  return await UserModel().findOne({ where: { email } });
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
