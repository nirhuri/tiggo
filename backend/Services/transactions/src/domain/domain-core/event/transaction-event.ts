import { DomainEvent } from "@machsan-tiggo/common";
import { Transaction } from "../entity/transaction";

export abstract class TransactionEvent implements DomainEvent<Transaction> {
  protected transaction: Transaction;

  public constructor(transaction: Transaction) {
    this.transaction = transaction;
  }

  public getTransaction(): Transaction {
    return this.transaction;
  }
}
