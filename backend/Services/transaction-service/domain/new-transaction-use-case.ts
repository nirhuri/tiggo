import axios from 'axios';
import { AppError } from '@practica/error-handling';
import * as transactionRepository from '../data-access/repositories/order-repository';
import paymentTermsService from './payment-terms-service';
import { addTransactionDTO, getNewTransactionValidator } from './transaction-schema';

export async function addTransaction(newTransaction: addTransactionDTO) {
  validateNewTransactionRequest(newTransaction);
  const userWhoOrdered = await getUserOrThrowIfNotExist(newTransaction.userId);
  const response = await transactionRepository.addTransaction(newTransaction);

  return response;
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

function validateNewTransactionRequest(
  newTransactionRequest: addTransactionDTO
) {
  const AjvSchemaValidator = getNewTransactionValidator();
  // @ts-expect-error TODO: fix this type error
  const isValid = AjvSchemaValidator(newTransactionRequest);
  if (!isValid) {
    throw new AppError('invalid-transaction', `Validation failed`, 400, true);
  }
}

export async function deleteTransaction(userId) {
  return await transactionRepository.deleteTransaction(userId);
}

export async function getTransaction(userId) {
  return await transactionRepository.getOrderById(userId);
}
