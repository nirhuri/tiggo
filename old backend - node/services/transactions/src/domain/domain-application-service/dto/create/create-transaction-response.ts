import { Money, TransactionAddress, UUID } from "@machsan-tiggo/common";

export class CreateTransactionResponse {
  private userId: UUID;

  private accountId: UUID;

  private transactionAmount: Money;

  private message: string;

  private transactionAddress: TransactionAddress;

  setUserId(userId: UUID) {
    this.userId = userId;
    return this;
  }
  setAccountId(accountId: UUID) {
    this.accountId = accountId;
    return this;
  }
  setTransactionAmount(transactionAmount: Money) {
    this.transactionAmount = transactionAmount;
    return this;
  }
  setMessage(message: string) {
    this.message = message;
    return this;
  }

  setTransactionAddress(transactionAddress: TransactionAddress) {
    this.transactionAddress = transactionAddress;
    return this;
  }
}
