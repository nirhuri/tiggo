import { AppError } from '@practica/error-handling';

import {
  AbstractTransaction,
  CashTransaction,
  CreditCardTransaction,
  TransactionKind,
} from './transactionsKind';

export function transactionFactory(
  type: TransactionKind,
  transactionRequest
): AbstractTransaction {
  switch (type) {
    case TransactionKind.cash:
      return new CashTransaction(transactionRequest);
    case TransactionKind.credit:
      return new CreditCardTransaction(transactionRequest);
    default:
      throw new AppError(
        'transaction-factory',
        'Unknown transaction type',
        400,
        true
      );
  }
}
