import getTransactionModel from './transaction-model';

// ️️️✅ Best Practice: The repository pattern - Wrap the entire DB layer with a simple interface that returns plain JS objects
export async function getOrderById(id: number) {
  return await getTransactionModel().findOne({ where: { id } });
}

export async function addTransaction(transactionDetails) {
  const addingResponse = await getTransactionModel().create(transactionDetails);

  return addingResponse;
}

export async function deleteTransaction(orderIdToDelete: number) {
  await getTransactionModel().destroy({ where: { id: orderIdToDelete } });
}

export async function cleanupData() {
  await getTransactionModel().truncate();
}
