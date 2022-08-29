import { DomainException } from "@machsan-tiggo/common";

export class TransactionDomainException extends DomainException {
  public constructor(message: string, stack: string | undefined = undefined) {
    super(message, stack);
  }
}
