import "reflect-metadata";

const TYPES = {
  TransactionController: Symbol.for("TransactionController"),
  TransactionApplicationService: Symbol.for("TransactionApplicationService"),
  TransactionRepository: Symbol.for("TransactionRepository"),
  TransactionCreateCommandHandler: Symbol.for(
    "TransactionCreateCommandHandler"
  ),
  TransactionDomainService: Symbol.for("TransactionDomainService"),
};

export { TYPES };
