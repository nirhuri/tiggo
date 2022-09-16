import { Container } from "inversify";
import { TYPES } from "../types/inversify-types";
import { TransactionController } from "../../application/rest/transaction-controller";
import { TransactionApplicationService } from "../../domain/domain-application-service/transaction-application-service";
import { CashTransactionRepository } from "../../data-access/repository/cash-transaction-repository";
import { CreateTransactionCommandHandler } from "../../domain/domain-application-service/transaction-create-command-handler";
import { TransactionDomainService } from "../../domain/domain-core/transaction-domain-service";
import { CashTransactionEntity } from "../../data-access/entity/cash-transaction";

const container = new Container();

container.bind(TYPES.TransactionController).to(TransactionController);
container
  .bind(TYPES.TransactionApplicationService)
  .to(TransactionApplicationService);
container.bind(TYPES.CashTransactionRepository).to(CashTransactionRepository);
container
  .bind(TYPES.TransactionCreateCommandHandler)
  .to(CreateTransactionCommandHandler);

container.bind(TYPES.TransactionDomainService).to(TransactionDomainService);
container.bind(TYPES.CashTransactionEntity).to(CashTransactionEntity);

export { container };
