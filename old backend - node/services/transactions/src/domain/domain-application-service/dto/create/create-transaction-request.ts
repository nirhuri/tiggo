import { CreateTransactionCommand } from "./create-transaction-command";

export class CreateTransactionRequest {
  constructor(
    public readonly userId: string,
    public readonly accountId: string,
    public readonly amount: number,
    public readonly title: string,
    public readonly transactionStatus: number,
    public readonly created_at: Date,
    public readonly updated_at: Date,
    public readonly category: string,
    public readonly transactionAddress: { id: string; businessName: string }
  ) {}

  serializeCommand(): CreateTransactionCommand {
    return new CreateTransactionCommand(
      this.userId,
      this.accountId,
      this.amount,
      this.title,
      this.transactionStatus,
      this.created_at,
      this.updated_at,
      this.category,
      {
        id: this.transactionAddress.id,
        businessName: this.transactionAddress.businessName,
      }
    );
  }
}
