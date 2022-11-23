import { AppError } from '@practica/error-handling';
import { getSigninUserValidator, signinUserRequest } from './user-schema';
import { checkPassword } from './encryption-service';
import { SigninUserDto } from './dto/signin-user-dto';
import * as userRepository from '../data-access/repositories/users-repository';
import { generateJwtToken } from '../../../libraries/auth/index';
import { User } from './types';

export async function signinUser(user: signinUserRequest) {
  validateSigninUserRequest(user);
  const savedUser = <User>await userRepository.getUserByEmail(user.email);
  if (!savedUser) {
    throw new AppError('user-signin-error', 'User does not exist', 400, true);
  }
  const { id, email, password, first_name, last_name } = savedUser;
  const isValidPassword = await checkPassword(user.password, password);
  if (!isValidPassword) {
    throw new AppError('signin-user-error', 'Invalid Password', 400, true);
  }
  const token = generateJwtToken(id, email, 'privateJwtKey');
  return new SigninUserDto(id, first_name, last_name, email, token);
}

function validateSigninUserRequest(user: signinUserRequest) {
  const AjvSchemaValidator = getSigninUserValidator();
  // @ts-expect-error TODO: fix this type error
  const isValid = AjvSchemaValidator(user);
  if (!isValid) {
    throw new AppError('invalid-credentials', 'Validation failed', 400, true);
  }
}
