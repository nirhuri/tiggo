import { addCashTransactionDTO } from './transaction-schema';
import { transactionFactory } from './transaction-factory';
import { TransactionKind } from './transactions-kind';

export async function addCashTransaction(
  newTransaction: addCashTransactionDTO
) {
  return await addTransaction(newTransaction, TransactionKind.cash);
}

async function addTransaction(
  newTransaction: addCashTransactionDTO,
  transactionKind: TransactionKind
) {
  const transaction = transactionFactory(transactionKind, newTransaction);
  transaction.validateTransactionRequest();
  return transaction.save(); // TODO: return transaction response instead of database object
}
