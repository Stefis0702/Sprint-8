import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VariationPercentageState {
  variationPercentage: number;
}

const initialState: VariationPercentageState = {
  variationPercentage: 0,
};

const variationPercentageSlice = createSlice({
  name: 'variationPercentage',
  initialState,
  reducers: {
    setVariationPercentage(state, action: PayloadAction<number>) {
      state.variationPercentage = action.payload;
    },
    
  },
});

export const { setVariationPercentage  } = variationPercentageSlice.actions;
export default variationPercentageSlice.reducer;