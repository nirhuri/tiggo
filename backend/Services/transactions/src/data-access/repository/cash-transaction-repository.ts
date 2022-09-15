import { injectable, decorate, inject, unmanaged, optional } from "inversify";
import { DataSource, Repository } from "typeorm";
import { TYPES } from "../../container/types/inversify-types";
import { ITransactionRepository } from "../../domain/domain-application-service/ports/output/repository/itransaction-repository";
import { CashTransaction } from "../../domain/domain-core/entity/cash-transaction";
import { CashTransactionEntity } from "../entity/cash-transaction";

decorate(injectable(), Repository)

@injectable()
export class CashTransactionRepository
  extends Repository<CashTransactionEntity>
  implements ITransactionRepository
{
  constructor(@optional() private dataSource: DataSource) {
    super(CashTransactionEntity, dataSource.createEntityManager());
  }

  async createCashTransaction(
    transaction: CashTransaction
  ): Promise<CashTransactionEntity> {
      return await this.save({ ...transaction });
  }
}