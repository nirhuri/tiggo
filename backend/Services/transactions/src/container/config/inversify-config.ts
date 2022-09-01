import { Container } from "inversify";
import { TYPES } from "../types/inversify-types";
import { TransactionController } from "../../application/rest/transaction-controller";
import { TransactionApplicationService } from "../../domain/domain-application-service/transaction-application-service";
import { TransactionRepository } from "../../data-access/repository/transaction-repository";
import { TransactionCreateCommandHandler } from "../../domain/domain-application-service/transaction-create-command-handler";
import { TransactionDomainService } from "../../domain/domain-core/transaction-domain-service";

const container = new Container();

container.bind(TYPES.TransactionController).to(TransactionController);
container
  .bind(TYPES.TransactionApplicationService)
  .to(TransactionApplicationService);
container.bind(TYPES.TransactionRepository).to(TransactionRepository);
container
  .bind(TYPES.TransactionCreateCommandHandler)
  .to(TransactionCreateCommandHandler);

container.bind(TYPES.TransactionDomainService).to(TransactionDomainService);

export { container };
