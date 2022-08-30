import { Transaction } from "../entity/transaction";
import { TransactionEvent } from "./transaction-event";

export class TransactionCreatedEvent extends TransactionEvent {
  public constructor(transaction: Transaction) {
    super(transaction);
  }
}
