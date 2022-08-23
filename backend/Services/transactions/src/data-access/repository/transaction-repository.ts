import { injectable } from "inversify";
import { ITransactionRepository } from "../../domain/domain-application-service/ports/output/repository/itransaction-repository";

@injectable()
export class TransactionRepository implements ITransactionRepository {
    
}