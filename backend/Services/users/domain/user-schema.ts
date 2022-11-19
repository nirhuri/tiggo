import ajv from '@practica/validation';
import { Static, Type } from '@sinclair/typebox';

export const addUserSchema = Type.Object({
  email: Type.String(),
  firstName: Type.String(),
  lastName: Type.String(),
  fullName: Type.String(),
  password: Type.String(),
  roleId: Type.String(),
});

export const signinUserSchema = Type.Object({
  email: Type.String(),
  password: Type.String(),
});

export type addUserDTO = Static<typeof addUserSchema>;
export type signinUserDTO = Static<typeof signinUserSchema>;

export function getNewUserValidator() {
  const validator = ajv.getSchema<addUserDTO>('new-user');
  if (!validator) {
    ajv.addSchema(addUserSchema, 'new-user');
  }

  return ajv.getSchema<addUserDTO>('new-user');
}

export function getSigninUserValidator() {
  const validator = ajv.getSchema<signinUserDTO>('signin-user');
  if (!validator) {
    ajv.addSchema(signinUserSchema, 'signin-user');
  }

  return ajv.getSchema<signinUserDTO>('signin-user');
}
