import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loanAmount: 0,
  advanceAmount: 0,
  infoAutos: 0,
  repairs: 0,
  cuotes: 6,
  calculatedData: {
    financedAmount: 0,
    monthlyPayment: 0,
    tct: 0,
    monthlyRate: 0,
  },
};

export const simulatorSlice = createSlice({
  name: "simulator",
  initialState,
  reducers: {
    saveSimulationData: (state, action) => {
      const {
        loanAmount,
        advanceAmount,
        infoAutos,
        repairs,
        cuotes,
        calculatedData,
      } = action.payload;
      state.loanAmount = loanAmount;
      state.advanceAmount = advanceAmount;
      state.infoAutos = infoAutos;
      state.repairs = repairs;
      state.cuotes = cuotes;
      state.calculatedData = calculatedData;
    },
  },
});

export const { saveSimulationData } = simulatorSlice.actions;
export default simulatorSlice.reducer;
