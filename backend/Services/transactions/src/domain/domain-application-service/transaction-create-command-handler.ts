import { inject, injectable } from "inversify";
import { TYPES } from "../../container/types/inversify-types";
import { Transaction } from "../domain-core/entity/transaction";
import { TransactionCreatedEvent } from "../domain-core/event/transaction-created-event";
import { ITransactionDomainService } from "../domain-core/itransaction-domain-service";

import { CreateTransactionCommand } from "./dto/create/create-transaction-command";
import { CreateTransactionResponse } from "./dto/create/create-transaction-response";
import { TransactionDataMapper } from "./mapper/transaction-data-mapper";
@injectable()
export class TransactionCreateCommandHandler {
  constructor(
    @inject(TYPES.TransactionDomainService)
    private transactionDomainService: ITransactionDomainService
  ) {}

  public createCashTransaction(
    createTransactionCommand: CreateTransactionCommand
  ): CreateTransactionResponse {
    const transaction: Transaction =
      TransactionDataMapper.createCashTransactionCommandToOrder(
        createTransactionCommand
      );
    const orderCreatedEvent: TransactionCreatedEvent =
      this.transactionDomainService.validateAndInitiateTransaction(transaction);
    // DOTO ADD saveTransaction(transaction);
    return TransactionDataMapper.cashTransactionToCreateTransactionResponse(
      orderCreatedEvent.getTransaction(),
      "transaction created successfully"
    );
    //    private Transaction saveTransaction(Transaction transaction) {
    //        Transaction transactionResult = transactionRepository.save(order);
    //        if (transactionResult == null) {
    //            log.error("Could not save order!");
    //            throw new TransactionDomainException("Could not save order!");
    //        }
    //        log.info("Order is saved with id: {}", transactionResult.getId().getValue());
    //        return transactionResult;
    //    }
  }
}
