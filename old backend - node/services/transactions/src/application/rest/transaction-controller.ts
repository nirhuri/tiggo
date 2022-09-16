import express from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../../container/types/inversify-types";
import { CreateTransactionRequest } from "../../domain/domain-application-service/dto/create/create-transaction-request";
import { ITransactionApplicationService } from "../../domain/domain-application-service/ports/input/itransaction-application-service";

@injectable()
export class TransactionController {
  public router = express.Router();

  constructor(
    @inject(TYPES.TransactionApplicationService)
    private transactionApplicationService: ITransactionApplicationService
  ) {
    this.initRoutes();
  }

  async createCashTransaction(
    createTransactionRequest: CreateTransactionRequest
  ) {
    console.log("controller: ", createTransactionRequest.serializeCommand());
    return await this.transactionApplicationService.createCashTransaction(
      createTransactionRequest.serializeCommand()
    );
  }

  initRoutes(): void {
    this.router.post("/service/transaction/cash", this.createCashTransaction);
  }
}
