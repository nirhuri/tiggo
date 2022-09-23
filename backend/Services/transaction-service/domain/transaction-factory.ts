import { AppError } from '@practica/error-handling';
import {
  addCashTransactionDTO,
  addCreditCardTransactionDTO,
  getNewCashTransactionValidator,
  getNewCreditCardTransactionValidator,
} from './transaction-schema';
import * as transactionRepository from '../data-access/repositories/transaction-repository';

export interface AbstractTransaction {
  validateTransactionRequest(): void;
  save(): any;
}

export class CashTransaction implements AbstractTransaction {
  constructor(private transactionDTO: addCashTransactionDTO) {}
  validateTransactionRequest() {
    const AjvSchemaValidator = getNewCashTransactionValidator();
    // @ts-expect-error TODO: fix this type error
    const isValid = AjvSchemaValidator(this.transactionDTO);
    if (!isValid) {
      throw new AppError('invalid-transaction', `Validation failed`, 400, true);
    }
  }
  async save() {
    const response = await transactionRepository.addTransaction(
      this.transactionDTO
    );
  }
}

export class CreditCardTransaction implements AbstractTransaction {
  constructor(private transactionDTO: addCreditCardTransactionDTO) {}
  validateTransactionRequest() {
    const AjvSchemaValidator = getNewCreditCardTransactionValidator();
    // @ts-expect-error TODO: fix this type error
    const isValid = AjvSchemaValidator(this.transactionDTO);
    if (!isValid) {
      throw new AppError('invalid-transaction', `Validation failed`, 400, true);
    }
  }
  async save() {}
}

export function transactionFactory(
  type: string,
  transactionRequest
): AbstractTransaction {
  if (type === 'cash') {
    return new CashTransaction(transactionRequest);
  } else if (type === 'credit-card') {
    return new CreditCardTransaction(transactionRequest);
  } else {
    throw new AppError(
      'transaction-factory',
      'Unknown transaction type',
      400,
      true
    );
  }
}
