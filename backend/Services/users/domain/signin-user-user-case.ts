import { AppError } from '@practica/error-handling';
import { getSigninUserValidator, signinUserDTO } from './user-schema';
import { checkPassword } from './encryption-service';
import { SigninUserDto } from './dto/signin-user-dto';
import * as userRepository from '../data-access/repositories/users-repository';
import { generateJwtToken } from '../../../libraries/auth/index';

export async function signinUser(user: signinUserDTO) {
  validateSigninUserRequest(user);
  const savedUser = await userRepository.getUserByEmail(user.email);
  const { id, email, password, firstName, lastName } = JSON.parse(savedUser);
  const isValidPassword = await checkPassword(user.password, password);
  if (!isValidPassword) {
    throw new AppError('signin-user-error', 'Invalid Password', 400, true);
  }
  const token = generateJwtToken(id, email, 'privateJwtKey');
  return new SigninUserDto(id, firstName, lastName, email, token);
}

function validateSigninUserRequest(user: signinUserDTO) {
  const AjvSchemaValidator = getSigninUserValidator();
  // @ts-expect-error TODO: fix this type error
  const isValid = AjvSchemaValidator(user);
  if (!isValid) {
    throw new AppError('invalid-credentials', 'Validation failed', 400, true);
  }
}
