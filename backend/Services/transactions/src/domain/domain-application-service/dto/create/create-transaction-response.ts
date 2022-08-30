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
  private transactionDataType: string;

  @IsNotEmpty()
  private transactionAddress: TransactionAddress;
}
