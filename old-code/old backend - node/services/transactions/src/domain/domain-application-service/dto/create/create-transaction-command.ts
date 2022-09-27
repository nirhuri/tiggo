import {
  AccountId,
  Money,
  TransactionAddress,
  TransactionStatus,
  UserId
} from "@machsan-tiggo/common";

export class CreateTransactionCommand {
  public readonly userId: UserId;
  public readonly accountId: AccountId;
  public readonly amount: Money;
  public readonly title: string;
  public readonly transactionStatus: TransactionStatus;
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly category: string;
  public readonly transactionAddress: TransactionAddress;
  constructor(
    userId: string,
    accountId: string,
    amount: number,
    title: string,
    transactionStatus: number,
    created_at: Date,
    updated_at: Date,
    category: string,
    transactionAddress: { id: string; businessName: string }
  ) {
    this.userId = new UserId(userId);
    this.accountId = new AccountId(accountId);
    this.amount = new Money(amount);
    this.title = title;
    this.transactionStatus = transactionStatus === 0 ? TransactionStatus.DEPOSITE : TransactionStatus.WITHDRAW;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.category = category;
    this.transactionAddress = new TransactionAddress(transactionAddress.id, transactionAddress.businessName)
  }
}
