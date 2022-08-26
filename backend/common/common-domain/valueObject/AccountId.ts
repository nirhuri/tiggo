import { UUID } from "../types/UUID";

export class AccountId extends BaseId<UUID> {
  constructor(value: UUID) {
    super(value);
  }
}
