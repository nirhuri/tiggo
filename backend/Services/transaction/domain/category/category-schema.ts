import ajv from '@practica/validation';
import { Static, Type } from '@sinclair/typebox';

export const addCategorySchema = Type.Object({
  name: Type.String(),
  accountId: Type.String(),
  createdAt: Type.String(),
  updatedAt: Type.String(),
});

export const updataCategorySchema = Type.Object({
  name: Type.String(),
  id: Type.String(),
});

export type addCategoryDTO = Static<typeof addCategorySchema>;
export type updataCategoryDTO = Static<typeof updataCategorySchema>;

export function getNewCategoryValidator() {
  const validator = ajv.getSchema<addCategoryDTO>('new-category');

  if (!validator) {
    ajv.addSchema(addCategorySchema, 'new-category');
  }

  return ajv.getSchema<addCategoryDTO>('new-category');
}

export function getUpdataCategoryValidator() {
  const validator = ajv.getSchema<updataCategoryDTO>('updata-category');

  if (!validator) {
    ajv.addSchema(updataCategorySchema, 'updata-category');
  }

  return ajv.getSchema<updataCategoryDTO>('updata-category');
}
