import getCategoriesModel from '../models/category-model';

export async function getCategoryById(id: number) {
  return await getCategoriesModel().findOne({ where: { id } });
}

export async function updateCategory(newCategory) {
  //find Category by id and update it value if it exists
  const category = await getCategoriesModel().findOne({
    where: { id: newCategory.id },
  });
  if (category) {
    newCategory.updatedAt = new Date().toISOString();
    await category.update(newCategory);
  } else {
    throw new Error('Category not found');
  }
}

export async function addCategory(newCategory) {
  const addingResponse = await getCategoriesModel().create(newCategory);

  return addingResponse;
}

export async function deleteCategory(categoryIdToDelete: number) {
  await getCategoriesModel().destroy({ where: { id: categoryIdToDelete } });
}

export async function cleanupData() {
  await getCategoriesModel().truncate();
}
