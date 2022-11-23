import ajv from '@practica/validation';
import { Static, Type } from '@sinclair/typebox';

export const addUserSchema = Type.Object({
  email: Type.String(),
  firstName: Type.String(),
  lastName: Type.String(),
  fullName: Type.String(),
  password: Type.String(),
  roleId: Type.Integer(),
});

export const signinUserSchema = Type.Object({
  email: Type.String(),
  password: Type.String(),
});

export type addUserRequest = Static<typeof addUserSchema>;
export type signinUserRequest = Static<typeof signinUserSchema>;

export function getNewUserValidator() {
  const validator = ajv.getSchema<addUserRequest>('new-user');
  if (!validator) {
    ajv.addSchema(addUserSchema, 'new-user');
  }

  return ajv.getSchema<addUserRequest>('new-user');
}

export function getSigninUserValidator() {
  const validator = ajv.getSchema<signinUserRequest>('signin-user');
  if (!validator) {
    ajv.addSchema(signinUserSchema, 'signin-user');
  }

  return ajv.getSchema<signinUserRequest>('signin-user');
}
