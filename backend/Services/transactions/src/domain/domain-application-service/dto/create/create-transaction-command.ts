import {
  AccountId,
  Money,
  TransactionAddress,
  TransactionStatus,
  UserId,
} from "@machsan-tiggo/common";

export class CreateTransactionCommand {
  constructor(
    public readonly userId: UserId,
    public readonly accountId: AccountId,
    public readonly amount: Money,
    public readonly title: string,
    public readonly transactionStatus: TransactionStatus,
    public readonly created_at: Date,
    public readonly updated_at: Date,
    public readonly category: string,
    public readonly transactionAddress: TransactionAddress
  ) {}
}
