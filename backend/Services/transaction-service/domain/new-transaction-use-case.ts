import axios from 'axios';
import { AppError } from '@practica/error-handling';
import * as orderRepository from '../data-access/repositories/order-repository';
import paymentTermsService from './payment-terms-service';
import { addTransactionDTO, getNewTransactionValidator } from './order-schema';


export async function addTransaction(newOrder: addTransactionDTO) {
  validateNewTransactionRequest(newOrder);
  const userWhoOrdered = await getUserOrThrowIfNotExist(newOrder.userId);
  // paymentTermsService.determinePaymentTerms(
  //   newOrder.paymentTermsInDays,
  //   userWhoOrdered.terms
  // );

  const response = await orderRepository.addOrder(newOrder);

  return response;
}

async function getUserOrThrowIfNotExist(userId: number) {
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

function validateNewTransactionRequest(newOrderRequest: addTransactionDTO) {
  const AjvSchemaValidator = getNewTransactionValidator();
  // @ts-expect-error TODO: fix this type error
  const isValid = AjvSchemaValidator(newOrderRequest);
  if (!isValid) {
    throw new AppError('invalid-order', `Validation failed`, 400, true);
  }
}

export async function deleteOrder(userId) {
  return await orderRepository.deleteOrder(userId);
}

export async function getOrder(userId) {
  return await orderRepository.getOrderById(userId);
}
