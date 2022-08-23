import { Container } from "inversify";
import { TYPES } from "../types/inversify.types";
import { TransactionController } from "../../application/controllers/transaction-controller";
import { TransactionApplicationService } from "../../domain/domain-application-service/transaction-application-service";
import { TransactionRepository } from "../../data-access/repository/transaction-repository";


const container = new Container();

container.bind(TYPES.TransactionController).to(TransactionController);
container.bind(TYPES.TransactionApplicationService).to(TransactionApplicationService);
container.bind(TYPES.TransactionRepository).to(TransactionRepository);

export { container };
