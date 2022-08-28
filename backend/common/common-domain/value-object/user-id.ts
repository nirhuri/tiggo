import { UUID } from "../types/UUID";

export class UserId extends BaseId<UUID> {
  constructor(value: UUID) {
    super(value);
  }
}
