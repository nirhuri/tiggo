import getTransactionCategoriesModel from '../models/transaction-categories-model';

export async function getCategoriesById(id: number) {
  return await getTransactionCategoriesModel().findOne({ where: { id } });
}

export async function addTransaction(transactionDetails) {
  const addingResponse = await getCashTransactionModel().create(
    transactionDetails
  );

  return addingResponse;
}

export async function deleteTransaction(orderIdToDelete: number) {
  await getCashTransactionModel().destroy({ where: { id: orderIdToDelete } });
}

export async function cleanupData() {
  await getCashTransactionModel().truncate();
}
