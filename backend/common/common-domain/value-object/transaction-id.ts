import { UUID } from "../types/uuid";

class TransactionId extends BaseId<UUID> {
  constructor(value: UUID) {
    super(value);
  }
}
