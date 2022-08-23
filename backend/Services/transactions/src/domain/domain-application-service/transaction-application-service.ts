import { inject, injectable } from "inversify";
import { TYPES } from "../../container/types/inversify.types";
import { ITransactionApplicationService } from "./ports/input/itransaction-application-service";
import { ITransactionRepository } from "./ports/output/repository/itransaction-repository";

@injectable()
export class TransactionApplicationService implements ITransactionApplicationService {
    constructor(@inject(TYPES.TransactionRepository) private transactionRepository: ITransactionRepository) {}
}