import { AppError } from '@practica/error-handling';
import { addCashTransactionDTO, getNewCashTransactionValidator } from './transaction-schema';
import { transactionFactory } from './transaction-factory';

export async function addCashTransaction(newTransaction: addCashTransactionDTO) {
  validateNewTransactionRequest(newTransaction);
  const cashTransaction = transactionFactory('cash', newTransaction);
  cashTransaction.validateTransactionRequest();
  return cashTransaction.save();
}

function validateNewTransactionRequest(
  newTransactionRequest: addCashTransactionDTO
) {
  const AjvSchemaValidator = getNewCashTransactionValidator();
  // @ts-expect-error TODO: fix this type error
  const isValid = AjvSchemaValidator(newTransactionRequest);
  if (!isValid) {
    throw new AppError('invalid-transaction', `Validation failed`, 400, true);
  }
}
