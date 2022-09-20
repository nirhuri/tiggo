import ajv from '@practica/validation';
import { Static, Type } from '@sinclair/typebox';

export enum TransactionType {
  'WITHDRAW',
  'DEPOSITE',
}

export const addTransactionSchema = Type.Object({
  businessName: Type.String(),
  amount: Type.Number(),
  //TransactionType.WITHDRAW, TransactionType.DEPOSITE valitet as string
  type: Type.KeyOf(
    Type.Object({ WITHDRAW: Type.String(), DEPOSITE: Type.String() })
  ),

  //userId: Type.String(),
  title: Type.String(),
});

export type addTransactionDTO = Static<typeof addTransactionSchema>;

export function getNewTransactionValidator() {
  const validator = ajv.getSchema<addTransactionDTO>('new-transaction');
  if (!validator) {
    ajv.addSchema(addTransactionSchema, 'new-transaction');
  }

  return ajv.getSchema<addTransactionDTO>('new-transaction');
}
