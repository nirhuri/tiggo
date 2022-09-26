import getCashTransactionModel from '../models/cash-transaction-model';

export async function getOrderById(id: number) {
  return await getCashTransactionModel().findOne({ where: { id } });
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
