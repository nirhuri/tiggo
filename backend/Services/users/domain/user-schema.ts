import ajv from '@practica/validation';
import { Static, Type } from '@sinclair/typebox';

export const addUserSchema = Type.Object({
  email: Type.String(),
  firstName: Type.String(),
  lastName: Type.String(),
  title: Type.String(),
  password: Type.String()
});

export type addUserDTO = Static<typeof addUserSchema>;

export function getNewTransactionValidator() {
  const validator = ajv.getSchema<addUserDTO>('new-transaction');
  if (!validator) {
    ajv.addSchema(addUserSchema, 'new-transaction');
  }

  return ajv.getSchema<addUserDTO>('new-transaction');
}
