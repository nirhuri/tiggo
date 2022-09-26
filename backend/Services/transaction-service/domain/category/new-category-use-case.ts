import { AppError } from '@practica/error-handling';
import {
  addCategoryDTO,
  getNewCategoryValidator,
  getUpdataCategoryValidator,
  updataCategoryDTO,
} from './category-schema';
import * as categoryRepository from '../../data-access/repositories/category-repository';

export async function updateCategory(updateCategory: updataCategoryDTO) {
  validateUpdateCategoryRequest(updateCategory);
  const response = await categoryRepository.updateCategory(updateCategory);
  return response;
}
export async function addCategory(newCategory: addCategoryDTO) {
  newCategory.createdAt = new Date().toISOString();
  newCategory.updatedAt = new Date().toISOString();
  validateNewCategoryRequest(newCategory);

  const response = await categoryRepository.addCategory(newCategory);

  return response;
}

export async function deleteCategory(id) {
  await categoryRepository.deleteCategory(id);
}

export async function getCategory(id) {
  const response = await categoryRepository.getCategoryById(id);
  return response;
}
function validateUpdateCategoryRequest(
  updateCategoryRequest: updataCategoryDTO
) {
  const AjvSchemaValidator = getUpdataCategoryValidator();
  // @ts-expect-error TODO: fix this type error
  const isValid = AjvSchemaValidator(updateCategoryRequest);
  if (!isValid) {
    throw new AppError('invalid-category', `Validation failed`, 400, true);
  }
}
function validateNewCategoryRequest(newCategoryRequest: addCategoryDTO) {
  const AjvSchemaValidator = getNewCategoryValidator();
  // @ts-expect-error TODO: fix this type error
  const isValid = AjvSchemaValidator(newCategoryRequest);
  if (!isValid) {
    throw new AppError('invalid-category', `Validation failed`, 400, true);
  }
}
