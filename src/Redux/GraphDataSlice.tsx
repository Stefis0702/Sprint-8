import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GraphDataState {
  graphData: any[]; 
}

const initialState: GraphDataState = {
  graphData: [],
};

const graphDataSlice = createSlice({
  name: 'graphData',
  initialState,
  reducers: {
    setGraphData(state, action: PayloadAction<any[]>) { 
      state.graphData = action.payload;
    },
    
  },
});

export const { setGraphData} = graphDataSlice.actions;
export default graphDataSlice.reducer;