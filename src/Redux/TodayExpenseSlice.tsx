import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodayExpenseState {
  todayExpense: number;
}

const initialState: TodayExpenseState = {
  todayExpense: 0,
};

const todayExpenseSlice = createSlice({
  name: 'todayExpense',
  initialState,
  reducers: {
    setTodayExpense(state, action: PayloadAction<number>) {
      state.todayExpense = action.payload;
    },
    
  },
});

export const { setTodayExpense } = todayExpenseSlice.actions;
export default todayExpenseSlice.reducer;