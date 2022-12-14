import { Money, TransactionId } from "@machsan-tiggo/common";
import { CashTransaction } from "../../domain-core/entity/cash-transaction";
import { Transaction } from "../../domain-core/entity/transaction";
import { CreateTransactionCommand } from "../dto/create/create-transaction-command";
import { CreateTransactionResponse } from "../dto/create/create-transaction-response";

export class TransactionDataMapper {
  public static createCashTransactionCommandToTransaction(
    createTransactionCommand: CreateTransactionCommand
  ): CashTransaction {
    const transaction = new CashTransaction(
      new TransactionId("TODO:ADD ID" + Math.random()),
      createTransactionCommand.userId,
      createTransactionCommand.accountId,
      createTransactionCommand.amount,
      createTransactionCommand.transactionStatus,
      createTransactionCommand.category,
      createTransactionCommand.created_at,
      createTransactionCommand.updated_at,
      createTransactionCommand.transactionAddress
    );

    return transaction;
  }
  public static cashTransactionToCreateTransactionResponse(
    transaction: CashTransaction,
    message: string
  ): CreateTransactionResponse {
    const createTransactionResponse = new CreateTransactionResponse()
      .setUserId(transaction.getUserId().getValue())
      .setAccountId(transaction.getAccountId().getValue())
      .setTransactionAmount(transaction.getAmount())
      .setMessage(message)
      .setTransactionAddress(transaction.getTransactionAddress());

    return createTransactionResponse;
  }
}
