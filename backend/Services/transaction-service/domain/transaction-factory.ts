import { AppError } from '@practica/error-handling';

export interface AbstractTransaction {
  create(transaction: any);
  save();
}

export class CashTransaction implements AbstractTransaction {
  create(transaction: any) {}
  save() {}
}

export class CreditCardTransaction implements AbstractTransaction {
  create(transaction: any) {}
  save() {}
}

export function transactionFactory(type: string): AbstractTransaction {
  if (type === 'cash') {
    return new CashTransaction();
  } else if (type === 'credit-card') {
    return new CreditCardTransaction();
  } else {
    throw new AppError(
      'transaction-factory',
      'Unknown transaction type',
      400,
      true
    );
  }
}
