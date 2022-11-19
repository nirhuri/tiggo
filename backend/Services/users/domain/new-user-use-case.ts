import { AppError } from '@practica/error-handling';
import * as userRepository from '../data-access/repositories/users-repository';
import { addUserDTO, getNewUserValidator } from './user-schema';
import { hashPassword } from './encryption-service';
import { CreateUserDto } from './dto/create-user-dto';
import { generateJwtToken } from '../../../libraries/auth/index';

export async function createNewUser(newUser: addUserDTO) {
  newUser.fullName = `${newUser.firstName} ${newUser.lastName}`;
  newUser.roleId = '2c389a72-038c-48fa-be73-1b28cda61b29';
  validateNewUserRequest(newUser);
  const isUserExist = await userRepository.getUserByEmail(newUser.email);
  if (isUserExist) {
    throw new AppError(
      'user-create-error',
      'User with this email already exist',
      409,
      true
    );
  }
  const encryptedPassword = await hashPassword(newUser.password);
  newUser.password = String(encryptedPassword);
  const savedUser = await userRepository.addUser(newUser);
  const { firstName, lastName, email, id } = savedUser.toJSON();
  const token = generateJwtToken(id, email, 'privateJwtKey');
  return new CreateUserDto(id, firstName, lastName, email, token);
}

function validateNewUserRequest(newUserRequest: addUserDTO) {
  const AjvSchemaValidator = getNewUserValidator();
  // @ts-expect-error TODO: fix this type error
  const isValid = AjvSchemaValidator(newUserRequest);
  if (!isValid) {
    throw new AppError('invalid-user', `Validation failed`, 400, true);
  }
}
