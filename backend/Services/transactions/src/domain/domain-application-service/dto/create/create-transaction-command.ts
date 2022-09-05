import {
  AccountId,
  Money,
  TransactionAddress,
  TransactionStatus,
  UserId,
} from "@machsan-tiggo/common";


export class CreateTransactionCommand {
  protected readonly userId: UserId;
  protected readonly accountId: AccountId;
  protected readonly amount: Money;
  protected readonly transactionStatus: TransactionStatus;
  protected readonly category: string;
  protected readonly transactionAddress: TransactionAddress;

  public getUserId(): UserId {
    return this.userId;
  }
  public getAccountId(): AccountId {
    return this.accountId;
  }
  public getAmount(): Money {
    return this.amount;
  }
  public getTransactionStatus(): TransactionStatus {
    return this.transactionStatus;
  }
  public getCategory(): string {
    return this.category;
  }
  public getTransactionAddress(): TransactionAddress {
    return this.transactionAddress;
  }
}
