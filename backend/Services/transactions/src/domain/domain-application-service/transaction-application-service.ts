import { inject, injectable } from "inversify";
import { TYPES } from "../../container/types/inversify-types";
import { CreateTransactionCommand } from "./dto/create/create-transaction-command";
import { ITransactionApplicationService } from "./ports/input/itransaction-application-service";
import { ITransactionRepository } from "./ports/output/repository/itransaction-repository";

@injectable()
export class TransactionApplicationService
  implements ITransactionApplicationService
{
  constructor(
    @inject(TYPES.TransactionRepository)
    private transactionRepository: ITransactionRepository
  ) {}

    public createCashTransaction(transactionCommand: CreateTransactionCommand) {
      
  }
}
