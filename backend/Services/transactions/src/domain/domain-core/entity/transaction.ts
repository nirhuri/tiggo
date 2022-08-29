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
  protected readonly createdAt: Date;
  protected readonly updatedAt: Date;
  protected readonly transactionAddress: TransactionAddress;

  constructor(
    id: TransactionId,
    userId: UserId,
    accountId: AccountId,
    amount: Money,
    transactionStatus: TransactionStatus,
    Category: string,
    createdAt: Date,
    updatedAt: Date,
    transactionAddress: TransactionAddress
  ) {
    super(id);
    this.transactionId = id;
    this.userId = userId;
    this.accountId = accountId;
    this.amount = amount;
    this.transactionStatus = transactionStatus;
    this.Category = Category;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
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
    return this.createdAt;
  }
  getUpdatedAt(): Date {
    return this.updatedAt;
  }
  getTransactionAddress(): TransactionAddress {
    return this.transactionAddress;
  }
}
