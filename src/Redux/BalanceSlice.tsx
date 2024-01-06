import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface WeekBalance {
  [day: string]: number;
}

interface BalanceState {
  balancesByWeek: WeekBalance[]
}

const initialState: BalanceState = {
  balancesByWeek:[
    {
    Monday: 700,
    Tuesday: 300,
    Wednesday: 950,
    Thursday: 340,
    Friday: 110,
    Saturday: 234,
    Sunday: 768,
  },
  {
    Monday: 120,
    Tuesday: 220,
    Wednesday: 160,
    Thursday: 270,
    Friday: 190,
    Saturday: 434,
    Sunday: 456,
  },
  {
    Monday: 320,
    Tuesday: 220,
    Wednesday: 560,
    Thursday: 270,
    Friday: 190,
    Saturday: 234,
    Sunday: 168,
  },


  ]
};


    const balanceSlice = createSlice({
      name: 'balance',
      initialState,
      reducers: {
        setBalanceForWeek(state, action: PayloadAction<{ weekIndex: number; newWeekBalance: WeekBalance }>) {
          const { weekIndex, newWeekBalance } = action.payload;
          if (state.balancesByWeek[weekIndex]) {
            state.balancesByWeek[weekIndex] = newWeekBalance;
          }
        },
        
      },
    });
    
    export const { setBalanceForWeek } = balanceSlice.actions;
    export default balanceSlice.reducer;