export abstract class BaseEntity<ID> {
  protected readonly _id: ID;

  constructor(id: ID) {
    this._id = id;
  }

  public getId(): ID {
    return this._id;
  }
}
