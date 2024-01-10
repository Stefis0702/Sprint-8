import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './BalanceSlice';
import graphDataReducer from './GraphDataSlice';
import todayExpenseReducer from './TodayExpenseSlice';



const store = configureStore({
  reducer: {
    balance: balanceReducer,
    graphData: graphDataReducer,
    todayExpense: todayExpenseReducer,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;