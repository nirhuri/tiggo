import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import transactionsReducer from './slices/transactionSlice';
export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    auth: authReducer,
  },
});
