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
    Dilluns: 700,
    Dimarts: 300,
    Dimecres: 950,
    Dijous: 340,
    Divendres: 110,
    Dissabte: 234,
    Diumenge: 768,
  },
  {
    Dilluns: 120,
    Dimarts: 220,
    Dimecres: 160,
    Dijous: 270,
    Divendres: 190,
    Dissabte: 434,
    Diumenge: 456,
  },
  {
    Dilluns: 320,
    Dimarts: 220,
    Dimecres: 560,
    Dijous: 270,
    Divendres: 190,
    Dissabte: 234,
    Diumenge: 168,
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