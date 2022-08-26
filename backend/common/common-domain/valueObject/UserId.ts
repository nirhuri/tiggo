import { UUID } from "../types/UUID";

class UserId extends BaseId<UUID> {
  constructor(value: UUID) {
    super(value);
  }
}
