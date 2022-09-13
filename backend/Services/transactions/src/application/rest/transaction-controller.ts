import { Money } from "@machsan-tiggo/common";
import { inject, injectable } from "inversify";
import { Body, JsonController, Post } from "routing-controllers";
import { TYPES } from "../../container/types/inversify-types";
import { CreateTransactionCommand } from "../../domain/domain-application-service/dto/create/create-transaction-command";
import { ITransactionApplicationService } from "../../domain/domain-application-service/ports/input/itransaction-application-service";

@injectable()
@JsonController("/transaction")
export class TransactionController {
  constructor(
    @inject(TYPES.TransactionApplicationService)
    private transactionApplicationService: ITransactionApplicationService
  ) {}

  @Post("/cash")
  createCashTransaction(
    @Body() createTransactionCommand: CreateTransactionCommand
  ) {
    console.log("controller: ", createTransactionCommand);
    return this.transactionApplicationService.createCashTransaction(
      createTransactionCommand
    );
  }
}
