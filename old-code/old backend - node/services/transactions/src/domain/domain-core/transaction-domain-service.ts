import { injectable } from "inversify";
import { Transaction } from "./entity/transaction";
import { TransactionCreatedEvent } from "./event/transaction-created-event";
import { ITransactionDomainService } from "./itransaction-domain-service";
@injectable()
export class TransactionDomainService implements ITransactionDomainService {
  public validateAndInitiateTransaction(
    transaction: Transaction
  ): TransactionCreatedEvent {
    transaction.validate();

    return new TransactionCreatedEvent(transaction);
  }
}
