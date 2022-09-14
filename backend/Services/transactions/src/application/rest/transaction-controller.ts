import { inject, injectable } from "inversify";
import { Body, JsonController, Post } from "routing-controllers";
import { TYPES } from "../../container/types/inversify-types";
import { CreateTransactionRequest } from "../../domain/domain-application-service/dto/create/create-transaction-request";
import { ITransactionApplicationService } from "../../domain/domain-application-service/ports/input/itransaction-application-service";

@injectable()
@JsonController("/transaction")
export class TransactionController {
  constructor(
    @inject(TYPES.TransactionApplicationService)
    private transactionApplicationService: ITransactionApplicationService
  ) {}

  @Post("/cash")
  async createCashTransaction(
    @Body() createTransactionRequest: CreateTransactionRequest
  ) {
    console.log("controller: ", createTransactionRequest.serializeCommand());
    return await this.transactionApplicationService.createCashTransaction(
      createTransactionRequest.serializeCommand()
    );
  }
}
