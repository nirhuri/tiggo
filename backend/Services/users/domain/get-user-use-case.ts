import { AppError } from '@practica/error-handling';
import * as userRepository from '../data-access/repositories/users-repository';
import { GetUserDto } from './dto/get-user-dto';
import { User } from './types';

export const getByEmail = async (userEmail: string): Promise<GetUserDto> => {
  validateGetUserRequest(userEmail);
  const user = <User>await userRepository.getUserByEmail(userEmail);
  return new GetUserDto(
    user.id,
    user.first_name,
    user.last_name,
    user.full_name,
    user.email,
    user.role_title,
    user.role_type,
    user.created_at,
    user.updated_at
  );
};

function validateGetUserRequest(userField: string): void {
  if (!userField || typeof userField !== 'string') {
    throw new AppError('invalid-data', 'wrong data provided', 400, true);
  }
}
