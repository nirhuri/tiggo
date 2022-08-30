import {
  AccountId,
  Money,
  TransactionAddress,
  TransactionStatus,
  UserId,
} from "@machsan-tiggo/common";
import {
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateTransactionCommand {
  protected readonly userId: UserId;
  protected readonly accountId: AccountId;
  protected readonly amount: number;
  protected readonly transactionStatus: TransactionStatus;
  protected readonly Category: string;
  protected readonly createdAt: string;
  protected readonly transactionAddress: TransactionAddress;

  public getUserId(): UserId {
    return this.userId;
  }
  public getAccountId(): AccountId {
    return this.accountId;
  }
  public getAmount(): number {
    return this.amount;
  }
  public getTransactionStatus(): TransactionStatus {
    return this.transactionStatus;
  }
  public getCategory(): string {
    return this.Category;
  }
  public getCreatedAt(): string {
    return this.createdAt;
  }
  public getTransactionAddress(): TransactionAddress {
    return this.transactionAddress;
  }
}
//   @IsNotEmpty()
//   @IsInt()
//   @MinLength(1, { message: "Invalid amount." })
//   @MaxLength(20, { message: "Invalid amount." })
// amount: number;

//   @IsNotEmpty()
//   @IsString()
//   @MinLength(3, { message: "Title is too short." })
//   @MaxLength(20, { message: "Title is too long. Maximum of 20 characters." })
//title: string;
