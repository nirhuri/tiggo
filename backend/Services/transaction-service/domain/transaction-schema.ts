import ajv from '@practica/validation';
import { Static, Type } from '@sinclair/typebox';

export enum TransactionType {
  'WITHDRAW',
  'DEPOSITE',
}

export const addCashTransactionSchema = Type.Object({
  businessName: Type.String(),
  amount: Type.Number(),
  action: Type.Enum(TransactionType),
  userId: Type.String(),
  title: Type.String(),
});


export const addCreditCardTransactionSchema = Type.Object({
  businessName: Type.String(),
  amount: Type.Number(),
  action: Type.Enum(TransactionType),
  userId: Type.String(),
  title: Type.String(),
});

export type addCashTransactionDTO = Static<typeof addCashTransactionSchema>;
export type addCreditCardTransactionDTO = Static<typeof addCreditCardTransactionSchema>;

export function getNewCashTransactionValidator() {
  const validator = ajv.getSchema<addCashTransactionDTO>('new-transaction');

  if (!validator) {
    ajv.addSchema(addCashTransactionSchema, 'new-transaction');
  }

  return ajv.getSchema<addCashTransactionDTO>('new-transaction');
}

export function getNewCreditCardTransactionValidator() {
  const validator = ajv.getSchema<addCreditCardTransactionDTO>('new-transaction');

  if (!validator) {
    ajv.addSchema(addCreditCardTransactionSchema, 'new-transaction');
  }

  return ajv.getSchema<addCreditCardTransactionDTO>('new-transaction');
}