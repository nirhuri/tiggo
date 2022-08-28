import { injectable } from "inversify";
import { DataSource, Repository } from "typeorm";
import { ITransactionRepository } from "../../domain/domain-application-service/ports/output/repository/itransaction-repository";
import { CashTransaction } from "../../domain/domain-core/entity/cash-transaction";
import { CashTransactionEntity } from "../entity/cash-transaction";

@injectable()
export class TransactionRepository extends Repository<CashTransactionEntity> implements ITransactionRepository {
    constructor(private dataSource: DataSource) {
        super(CashTransactionEntity, dataSource.createEntityManager());
    }

    async createCashTransaction(transaction: CashTransaction) {
        
    }
}