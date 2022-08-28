import { UUID } from "../types/UUID";

class TransactionId extends BaseId<UUID> {
  constructor(value: UUID) {
    super(value);
  }
}
