import { Money, TransactionAddress, TransactionStatus, InternalServerError } from '@machsan-tiggo/common';
import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { Body, Controller, Post, UseBefore, Req, Res,  } from "routing-controllers";
import { ICreateTransactionRequest } from "./input/create-transaction-request";
import { CreateCashTransactionMiddleware } from "./middlwares/create-cash-transaction-middelware";

@Controller("/transaction")
export class TransactionController {
  constructor() {}

  @Post("/cash")
  //@UseBefore(CreateCashTransactionMiddleware)
  async createCashTransaction(
    @Req() req: Request,
    @Res() res: Response,
    @Body() createTransactionRequest: ICreateTransactionRequest
  ) {
    // after the auth middleware is approved the request, we need to approve the user and account status
    // and check if the user is not in black list or something like that
    // so we need to send http request to users service to validate the user
    // const user = await axios....

    const transaction = {
      userId: "12345",
      accountId: "24j4j232",
      amount: new Money(49.9),
      title: "Test Transaction",
      transactionStatus: TransactionStatus.WITHDRAW,
      category: "Supermarket",
      transactionAddress: new TransactionAddress("29394--fgtgg", "Shufersal"),
    };

    try {
      const response = await axios.post(
        "http://localhost:3003/transaction/cash",
        transaction
      );
      return response.data;
    } catch (error: any) {
      throw new InternalServerError();
    }
  }
}
