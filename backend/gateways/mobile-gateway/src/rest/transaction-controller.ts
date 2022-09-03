import { Request, Response, NextFunction } from 'express';
import { Body, Controller, Post, UseBefore, Req, Res } from "routing-controllers";
import { ICreateTransactionRequest } from "./input/create-transaction-request";
import { CreateCashTransactionMiddleware } from "./middlwares/create-cash-transaction-middelware";

@Controller("/transaction")
export class TransactionController {
  constructor() {}

  @Post("/cash")
  //@UseBefore(CreateCashTransactionMiddleware)
  createCashTransaction(
    @Req() req: Request,
    @Res() res: Response,
    @Body() createTransactionRequest: ICreateTransactionRequest
  ) {
    return "OK"
  }
}
