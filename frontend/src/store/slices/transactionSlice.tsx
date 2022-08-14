import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  transactions: [],
  transactionsByCategory: {},
  categoriesName: [],
};
const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
    updateTransaction: (state, action) => {
      const index = state.transactions.findIndex(
        (transaction: any) => transaction.id === action.payload.id,
      );
      state.transactions[index] = action.payload;
    },
    addCategory: (state, action) => {
      state.categoriesName.push(action.payload);
      state.transactionsByCategory[action.payload] = {};
    },
    setCategories: (state, action) => {
      state.transactionsByCategory = action.payload;
      state.categoriesName = Object.keys(action.payload);
    },
  },
});
export const {
  setTransactions,
  addTransaction,
  updateTransaction,
  addCategory,
  setCategories,
} = transactionsSlice.actions;

export const TransactionsData = (state: any) => state.transactions.transactions;
export const CategoriesName = (state: any) =>
  state.transactions.categoriesName || [];

export const TransactionsGroupByCategories = (state: any) =>
  state.transactions.transactionsByCategory;
export default transactionsSlice.reducer;
