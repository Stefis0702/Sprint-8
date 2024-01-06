
import balanceReducer, { setBalanceForWeek } from '../../Redux/BalanceSlice';

describe('balanceSlice reducer', () => {
  const initialState = {
    balancesByWeek: [
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
      
    ],
  };

  it('should handle setting balance for a specific week', () => {
    const newWeekBalance = {
      Monday: 100,
      Tuesday: 200,
      Wednesday: 300,
      Thursday: 400,
      Friday: 500,
      Saturday: 600,
      Sunday: 700,
    };

    const action = setBalanceForWeek({ weekIndex: 1, newWeekBalance });
    const state = balanceReducer(initialState, action);

    expect(state.balancesByWeek[1]).toEqual(newWeekBalance);
  });

  it('should handle setting balance for a non-existing week index', () => {
    const newWeekBalance = {
      Monday: 100,
      Tuesday: 200,
      Wednesday: 300,
      Thursday: 400,
      Friday: 500,
      Saturday: 600,
      Sunday: 700,
    };

   
    const action = setBalanceForWeek({ weekIndex: 5, newWeekBalance });
    const state = balanceReducer(initialState, action);

    expect(state).toEqual(initialState); 
  });
});