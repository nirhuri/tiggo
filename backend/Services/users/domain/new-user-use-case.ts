import axios from 'axios';
import { AppError } from '@practica/error-handling';
import * as userRepository from '../data-access/repositories/users-repository';
import { addUserDTO, getNewUserValidator } from './user-schema';
import { hashPassword } from './encryption-service';

export async function createNewUser(newUser: addUserDTO) {
  newUser.fullName = `${newUser.firstName} ${newUser.lastName}`;
  newUser.roleId = '2c389a72-038c-48fa-be73-1b28cda61b29';
  validateNewUserRequest(newUser);
  console.log("Before user check")
  const isUserExist = await userRepository.getUserByEmail(newUser.email);
  console.log("After user check")
  if (isUserExist) {
    throw new AppError('user-create-error', 'User with this email already exist', 409, true);
  }

  console.log(newUser)
  const encryptedPassword = await hashPassword(newUser.password);
  newUser.password = String(encryptedPassword);
  const savedUser = await userRepository.addUser(newUser)
  console.log(savedUser)
  // send verification email
  return savedUser;
}

async function getUserOrThrowIfNotExist(userId: string) {
  const userVerificationRequest = await axios.get(
    `http://localhost/user/${userId}`,
    {
      validateStatus: () => true,
    }
  );
  if (userVerificationRequest.status !== 200) {
    throw new AppError(
      'user-doesnt-exist',
      `The user ${userId} doesnt exist`,
      userVerificationRequest.status,
      true
    );
  }

  return userVerificationRequest.data;
}

function validateNewUserRequest(
  newUserRequest: addUserDTO
) {
  const AjvSchemaValidator = getNewUserValidator();
  // @ts-expect-error TODO: fix this type error
  const isValid = AjvSchemaValidator(newUserRequest);
  if (!isValid) {
    throw new AppError('invalid-user', `Validation failed`, 400, true);
  }
}

export async function deleteUser(userId) {
  return await userRepository.deleteUser(userId);
}

export async function getUser(userId) {
  return await userRepository.getUserById(userId);
}
