import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './BalanceSlice';
import graphDataReducer from './GraphDataSlice';
import todayExpenseReducer from './TodayExpenseSlice';
import variationPercentageReducer from './VariationPercentageSlice';


const store = configureStore({
  reducer: {
    balance: balanceReducer,
    graphData: graphDataReducer,
    todayExpense: todayExpenseReducer,
    variationPercentage: variationPercentageReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;