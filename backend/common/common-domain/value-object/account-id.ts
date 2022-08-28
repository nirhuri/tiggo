import { UUID } from "../types/uuid";

export class AccountId extends BaseId<UUID> {
  constructor(value: UUID) {
    super(value);
  }
}
