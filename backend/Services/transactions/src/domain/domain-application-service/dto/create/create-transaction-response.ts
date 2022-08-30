import { Money, TransactionAddress, UUID } from "@machsan-tiggo/common";
import { IsNotEmpty } from "class-validator";

export class CreateTransactionResponse {
  @IsNotEmpty()
  private userId: UUID;

  @IsNotEmpty()
  private accountId: UUID;

  @IsNotEmpty()
  private transactionAmount: Money;

  @IsNotEmpty()
  private message: string;

  @IsNotEmpty()
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
