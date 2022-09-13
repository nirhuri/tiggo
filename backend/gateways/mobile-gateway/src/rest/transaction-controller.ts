import axios from "axios";
import {
  Money,
  TransactionAddress,
  TransactionStatus,
  InternalServerError,
  UserId,
  AccountId,
} from "@machsan-tiggo/common";
import { Request, Response, NextFunction } from "express";
import {
  Body,
  Controller,
  Post,
  UseBefore,
  Req,
  Res,
  JsonController,
} from "routing-controllers";
import { CreateTransactionCommand } from "./input/create-transaction-command";
import { CreateCashTransactionMiddleware } from "./middlwares/create-cash-transaction-middelware";

@JsonController("/transaction")
export class TransactionController {
  @Post("/cash")
  //@UseBefore(CreateCashTransactionMiddleware)
  async createCashTransaction(
    @Body() createTransactionRequest: CreateTransactionCommand,
    @Req() req: Request,
    @Res() res: Response
  ) {
    // after the auth middleware is approved the request, we need to approve the user and account status
    // and check if the user is not in black list or something like that
    // so we need to send http request to users service to validate the user
    // const user = await axios....

    const transaction = {
      userId: new UserId("12345"),
      accountId: new AccountId("24j4j232"),
      amount: new Money(49.9),
      title: "Test Transaction",
      transactionStatus: TransactionStatus.WITHDRAW,
      created_at: new Date(),
      updated_at: new Date(),
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
