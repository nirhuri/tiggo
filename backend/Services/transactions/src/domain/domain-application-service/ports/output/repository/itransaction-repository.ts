import { CashTransactionEntity } from "../../../../../data-access/entity/cash-transaction";
import { CashTransaction } from "../../../../domain-core/entity/cash-transaction";

export interface ITransactionRepository {
  createCashTransaction(
    transaction: CashTransaction
  ): Promise<CashTransactionEntity>;
}