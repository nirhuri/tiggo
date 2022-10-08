import axios from 'axios';
import { AppError } from '@practica/error-handling';
import * as userRepository from '../data-access/repositories/accounts-repository';
import { addUserDTO, getNewUserValidator } from './account-schema';
import { hashPassword } from './encryption-service';
import { AccountCreatedPublisher } from '../entry-points/events/publishers/account-created-publisher';
import { natsWrapper } from '../entry-points/events/nats-wrapper';

export async function createNewUser(newUser: addUserDTO) {
  await new AccountCreatedPublisher(natsWrapper.client).publish({
    accountId: 'Account id',
  });
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
