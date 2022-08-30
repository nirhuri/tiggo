import "reflect-metadata";

const TYPES = {
  TransactionController: Symbol.for("TransactionController"),
  TransactionApplicationService: Symbol.for("TransactionApplicationService"),
  TransactionRepository: Symbol.for("TransactionRepository"),
};

export { TYPES };
