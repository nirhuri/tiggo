import { inject, injectable } from "inversify";
import { TYPES } from "../../container/types/inversify-types";
import { Transaction } from "../domain-core/entity/transaction";
import { TransactionCreatedEvent } from "../domain-core/event/transaction-created-event";
import { ITransactionDomainService } from "../domain-core/itransaction-domain-service";
import { CreateTransactionCommand } from "./dto/create/create-transaction-command";
import { CreateTransactionResponse } from "./dto/create/create-transaction-response";
import { TransactionDataMapper } from "./mapper/transaction-data-mapper";
import { ITransactionRepository } from "./ports/output/repository/itransaction-repository";


@injectable()
export class CreateTransactionCommandHandler {
  constructor(
    @inject(TYPES.TransactionDomainService)
    private transactionDomainService: ITransactionDomainService,
    @inject(TYPES.CashTransactionRepository)
    private cashTransactionRepository: ITransactionRepository
  ) {}

  public async createCashTransaction(
    createTransactionCommand: CreateTransactionCommand
  ): Promise<CreateTransactionResponse> {
    const transaction: Transaction =
      TransactionDataMapper.createCashTransactionCommandToTransaction(
        createTransactionCommand
      );
    const orderCreatedEvent: TransactionCreatedEvent =
      this.transactionDomainService.validateAndInitiateTransaction(transaction);
    await this.cashTransactionRepository.createCashTransaction(transaction);
    return TransactionDataMapper.cashTransactionToCreateTransactionResponse(
      orderCreatedEvent.getTransaction(),
      "Transaction created successfully"
    );
  }
}
