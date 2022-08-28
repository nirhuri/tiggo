import { UUID } from "../types/uuid";

export class UserId extends BaseId<UUID> {
  constructor(value: UUID) {
    super(value);
  }
}
