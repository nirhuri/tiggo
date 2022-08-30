import { Transaction } from "./entity/transaction";
import { TransactionCreatedEvent } from "./event/transaction-created-event";

export interface ITransactionDomainService {
  validateAndInitiateTransaction(
    transaction: Transaction
  ): TransactionCreatedEvent;
}
