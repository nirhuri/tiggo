import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
  UpdateEvent,
} from "typeorm";
import { CashTransactionEntity } from "../entity/cash-transaction";

@EventSubscriber()
export class CashTransactionSubscriber implements EntitySubscriberInterface {
  listenTo = () => CashTransactionEntity;

  async beforeInsert(event: InsertEvent<CashTransactionEntity>) {}

  async afterInsert(event: InsertEvent<CashTransactionEntity>) {}

  async beforeUpdate(event: UpdateEvent<CashTransactionEntity>) {}

  async afterUpdate(event: UpdateEvent<CashTransactionEntity>) {}

  async beforeRemove(event: RemoveEvent<CashTransactionEntity>) {}

  async afterRemove(event: RemoveEvent<CashTransactionEntity>) {}
}
