import AsyncStorage from '@react-native-async-storage/async-storage';
import {TRANSACTIONS_KEY} from '../constants/AsyncStorage';
import {TransactionTypeEnum} from '../screen/Home/type';
import {addTransaction} from '../store/slices/transactionSlice';

export const getTransactions = async () => {
  const res = await AsyncStorage.getItem(TRANSACTIONS_KEY);
  if (res) {
    return JSON.parse(res);
  }

  AsyncStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(data));
  return data;
};
export const addNewTransaction = async (transaction: any) => {
  console.log('addNewTransaction', transaction);
  const transactions = await getTransactions();

  transactions.push(transaction);
  await AsyncStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
  //add the transaction to the redux store
  addTransaction(transaction);
};

export const deleteTransaction = async (id: number) => {
  const transactions = await getTransactions();
  const index = transactions.findIndex(
    (transaction: any) => transaction.TransactionId === id,
  );
  transactions.splice(index, 1);
  await AsyncStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
};

//function to update transaction by transaction id
export const updateTransaction = async (id: number, transaction: any) => {
  const transactions = await getTransactions();
  const index = transactions.findIndex(
    (transaction: any) => transaction.TransactionId === id,
  );
  transactions[index] = transaction;
  await AsyncStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
};

//
const data = [
  {
    AccountId: '5e9f8f8f-f8f8-f8f8-f8f8-f8f8f8f88f8',
    Title: 'salary',
    Catagory: 'salary',
    TransactionType: TransactionTypeEnum.Income,
    IsConstant: true,
    IsCash: true,
    TransactionId: '5e9f88f-f8f8-f8f8-f8f8-f88f8f8f8f8',
    TransactionDate: '2022-07-07T00:00:00.000Z',
    TransactionUpdate: '2022-07-07T00:00:00.000Z',
    TransactionAmount: 13100,
    TransactionDescription: '',
  },
  {
    AccountId: '5e9f8f8f-f8f8-f8f8-f8f8-f8f8f8f88f8',
    Title: 'Rent ',
    Catagory: 'Rent',
    TransactionType: TransactionTypeEnum.Income,
    IsConstant: true,
    IsCash: true,
    TransactionId: '5e9f88f-f8f8-f8f8-f8f8-f88f8f8f8f8',
    TransactionDate: '2022-07-07T00:00:00.000Z',
    TransactionUpdate: '2022-07-07T00:00:00.000Z',
    TransactionAmount: 1100,
    TransactionDescription: '',
  },
  {
    AccountId: '5e9f8f8f-f8f8-f8f8-f8f8-f8f8f8f8ff8',
    Title: 'apple',
    Catagory: 'food',
    TransactionType: TransactionTypeEnum.Income,
    IsConstant: true,
    IsCash: true,
    TransactionId: '59f8f8f-f8f8-f8f8-f8f8-f8f8f8f8f8',
    TransactionDate: '2022-07-07T00:00:00.000Z',
    TransactionUpdate: '2022-07-07T00:00:00.000Z',
    TransactionAmount: 2040,
    TransactionDescription: '',
  },
  {
    AccountId: '5e9f8f8f-f8f8-f8f8-f8f8-f88f8f8ff8',
    Title: 'amazon',
    Catagory: 'food',
    TransactionType: TransactionTypeEnum.Expense,
    IsConstant: true,
    IsCash: true,
    TransactionId: '59f8f8f-f8f8-f8f8-f8f8-f8f8f88f8',
    TransactionDate: '2022-07-07T00:00:00.000Z',
    TransactionUpdate: '2022-07-07T00:00:01.000Z',
    TransactionAmount: 3509,
    TransactionDescription: '',
  },
  {
    AccountId: '5e9f8f8f-f8f8-f8f8-f8f8-f88f8f8ff8',
    Title: 'google',
    Catagory: 'food',
    TransactionType: TransactionTypeEnum.Expense,
    constant: false,
    TransactionId: '59f8f8f-f8f8-f8f8-f8f8-f8f8f88f8',
    TransactionDate: '2022-07-07T00:00:00.000Z',
    TransactionUpdate: '2022-07-07T00:00:01.000Z',
    TransactionAmount: 3109,
    TransactionDescription: '',
  },

  {
    AccountId: '5e9f8f8f-f8f8-f8f8-f8f8-f8f8f8f18f8',
    Title: 'pizza hut',
    Catagory: 'restaurant',
    TransactionType: TransactionTypeEnum.Expense,
    IsConstant: true,
    IsCash: true,
    TransactionId: '5e9f8ff-f8f8-f8f8-f8f8-f8f8f8f8f8',
    //today date
    TransactionDate: '2022-07-07T00:00:00.000Z',
    TransactionUpdate: '2022-07-07T00:00:00.000Z',
    TransactionAmount: 330,
    TransactionDescription: '',
  },
  {
    AccountId: '5e9f8f8f-f8f8-f8f8-f8f8-f8f8f8f18f8',
    Title: 'bbb',
    Catagory: 'restaurant',
    TransactionType: TransactionTypeEnum.Expense,
    IsConstant: true,
    IsCash: true,
    TransactionId: '5e9f8ff-f8f8-f8f8-f8f8-f8f8f8f8f8',
    //today date
    TransactionDate: '2022-07-07T00:00:00.000Z',
    TransactionUpdate: '2022-07-07T00:00:00.000Z',
    TransactionAmount: 330,
    TransactionDescription: '',
  },
  {
    AccountId: '5e9f8f8f-f8f8-f8f8-f8f8-f8f8f8f18f8',
    Title: 'agadir',
    Catagory: 'restaurant',
    TransactionType: TransactionTypeEnum.Expense,
    IsConstant: true,
    IsCash: true,
    TransactionId: '5e9f8ff-f8f8-f8f8-f8f8-f8f8f8f8f8',
    //today date
    TransactionDate: '2022-07-07T00:00:00.000Z',
    TransactionUpdate: '2022-07-07T00:00:00.000Z',
    TransactionAmount: 330,
    TransactionDescription: '',
  },
];
