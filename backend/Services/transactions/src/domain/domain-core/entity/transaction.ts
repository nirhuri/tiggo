import {
  AccountId,
  AggregateRoot,
  Money,
  TransactionStatus,
  UserId,
  TransactionAddress,
  TransactionId,
} from "@machsan-tiggo/common";
import { TransactionDomainException } from "../exception/transaction-domain-exception";

export abstract class Transaction extends AggregateRoot<TransactionId> {
  protected readonly transactionId: TransactionId;
  protected readonly userId: UserId;
  protected readonly accountId: AccountId;
  protected readonly amount: Money;
  protected readonly transactionStatus: TransactionStatus;
  protected readonly Category: string;
  protected readonly created_at: Date;
  protected readonly updated_at: Date;
  protected readonly transactionAddress: TransactionAddress;

  constructor(
    id: TransactionId,
    userId: UserId,
    accountId: AccountId,
    amount: Money,
    transactionStatus: TransactionStatus,
    Category: string,
    created_at: Date,
    updated_at: Date,
    transactionAddress: TransactionAddress
  ) {
    super(id);
    this.transactionId = id;
    this.userId = userId;
    this.accountId = accountId;
    this.amount = amount;
    this.transactionStatus = transactionStatus;
    this.Category = Category;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.transactionAddress = transactionAddress;
  }
  public validate(): void {
    this.validateTotalAmount();
  }

  private validateTotalAmount(): void {
    if (this.amount == null || !this.amount.isGreaterThanZero()) {
      throw new TransactionDomainException(
        "money amount must be greater than zero!"
      );
    }
  }

  public get TransactionId(): TransactionId {
    return this.transactionId;
  }
  getUserId(): UserId {
    return this.userId;
  }
  getAccountId(): AccountId {
    return this.accountId;
  }
  getAmount(): Money {
    return this.amount;
  }
  getTransactionStatus(): TransactionStatus {
    return this.transactionStatus;
  }
  getCategory(): string {
    return this.Category;
  }
  getCreatedAt(): Date {
    return this.created_at;
  }
  getUpdatedAt(): Date {
    return this.updated_at;
  }
  getTransactionAddress(): TransactionAddress {
    return this.transactionAddress;
  }
}
