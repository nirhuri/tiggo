import { Transaction } from "./entity/transaction";
import { TransactionCreatedEvent } from "./event/transaction-created-event";
import { ITransactionDomainService } from "./Itransaction-domain-service";

export class TransactionDomainService implements ITransactionDomainService {
  public validateAndInitiateTransaction(
    transaction: Transaction
  ): TransactionCreatedEvent {
    transaction.validate();

    return new TransactionCreatedEvent(transaction);
  }
}
