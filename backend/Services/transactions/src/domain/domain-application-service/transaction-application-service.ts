import { inject, injectable } from "inversify";
import { TYPES } from "../../container/types/inversify-types";
import { CreateTransactionCommand } from "./dto/create/create-transaction-command";
import { CreateTransactionResponse } from "./dto/create/create-transaction-response";
import { ITransactionApplicationService } from "./ports/input/itransaction-application-service";
import { CreateTransactionCommandHandler } from "./transaction-create-command-handler";

@injectable()
export class TransactionApplicationService
  implements ITransactionApplicationService
{
  private transactionCreateCommandHandler: CreateTransactionCommandHandler;
  constructor(
    @inject(TYPES.TransactionCreateCommandHandler)
    transactionCreateCommandHandler: CreateTransactionCommandHandler
  ) {
    this.transactionCreateCommandHandler = transactionCreateCommandHandler;
  }

  public async createCashTransaction(
    transactionCommand: CreateTransactionCommand
  ): Promise<CreateTransactionResponse> {
    return await this.transactionCreateCommandHandler.createCashTransaction(
      transactionCommand
    );
  }
}
