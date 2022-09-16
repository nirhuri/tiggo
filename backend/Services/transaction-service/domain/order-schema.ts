import ajv from '@practica/validation';
import { Static, Type } from '@sinclair/typebox';

enum TransactionType {
  'DEPOSITE' = 0,
  'WITHDRAW' = 1,
}

export const addTransactionSchema = Type.Object({
  businessName: Type.String(),
  amount: Type.Number(),
  type: Type.Enum(TransactionType),
  userId: Type.Integer(),
});

export type addTransactionDTO = Static<typeof addTransactionSchema>;

export function getNewTransactionValidator() {
  const validator = ajv.getSchema<addTransactionDTO>('new-transaction');
  if (!validator) {
    ajv.addSchema(addTransactionSchema, 'new-transaction');
  }

  return ajv.getSchema<addTransactionDTO>('new-transaction');
}
