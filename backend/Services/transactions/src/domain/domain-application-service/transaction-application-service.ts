import { inject, injectable } from "inversify";
import { TYPES } from "../../container/types/inversify-types";
import { CreateTransactionCommand } from "./dto/create/create-transaction-command";
import { CreateTransactionResponse } from "./dto/create/create-transaction-response";
import { ITransactionApplicationService } from "./ports/input/itransaction-application-service";
import { TransactionCreateCommandHandler } from "./transaction-create-command-handler";

@injectable()
export class TransactionApplicationService
  implements ITransactionApplicationService
{
  private transactionCreateCommandHandler: TransactionCreateCommandHandler;
  constructor(
    @inject(TYPES.TransactionCreateCommandHandler)
    transactionCreateCommandHandler: TransactionCreateCommandHandler
  ) {
    this.transactionCreateCommandHandler = transactionCreateCommandHandler;
  }

  public createCashTransaction(
    transactionCommand: CreateTransactionCommand
  ): CreateTransactionResponse {
    return this.transactionCreateCommandHandler.createCashTransaction(
      transactionCommand
    );
  }
}
