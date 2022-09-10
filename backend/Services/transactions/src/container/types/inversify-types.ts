import "reflect-metadata";

const TYPES = {
  TransactionController: Symbol.for("TransactionController"),
  TransactionApplicationService: Symbol.for("TransactionApplicationService"),
  CashTransactionRepository: Symbol.for("CashTransactionRepository"),
  TransactionCreateCommandHandler: Symbol.for(
    "TransactionCreateCommandHandler"
  ),
  TransactionDomainService: Symbol.for("TransactionDomainService"),
};

export { TYPES };
