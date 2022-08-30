import { Body, Controller, JsonController, Post, UseBefore } from "routing-controllers";
import { ICreateTransactionRequest } from "./input/create-transaction-request";
import { CreateCashTransactionMiddleware } from "./middlwares/create-cash-transaction-middelware";

@JsonController("/transaction")
export class TransactionController {
  constructor() {}

  @Post("/cash")
  @UseBefore(CreateCashTransactionMiddleware)
  createCashTransaction(
    @Body() createTransactionRequest: ICreateTransactionRequest
  ) {
    return createTransactionRequest;
  }
}
