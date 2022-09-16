import { CreateTransactionCommand } from "../../dto/create/create-transaction-command";
import { CreateTransactionResponse } from "../../dto/create/create-transaction-response";

export interface ITransactionApplicationService {
  createCashTransaction(
    transactionCommand: CreateTransactionCommand
  ): Promise<CreateTransactionResponse>;
}
