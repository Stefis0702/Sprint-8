import { createSlice, PayloadAction } from '@reduxjs/toolkit';





 export interface WeekBalance {
  [day: string]: number;
}

interface BalanceState {
  balancesByWeek: WeekBalance[],
  currentWeek: number;
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
  ,
  currentWeek: 0,
};


    const balanceSlice = createSlice({
      name: 'balance',
      initialState,
      reducers: {
        setBalanceForWeek(state, action: PayloadAction<{ weekIndex: number; newWeekBalance: WeekBalance }>) {
          const { weekIndex, newWeekBalance } = action.payload;
          
          return {
            ...state,
            balancesByWeek: state.balancesByWeek.map((week, index) =>
              index === weekIndex ? newWeekBalance : week
            ),
          };
        },
        setCurrentWeek(state, action: PayloadAction<number>) {
         
          return {
            ...state,
            currentWeek: action.payload,
          };
        },
      },
    });

    
    export const { setBalanceForWeek, setCurrentWeek } = balanceSlice.actions;
    export default balanceSlice.reducer;