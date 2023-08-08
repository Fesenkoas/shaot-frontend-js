import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foundCompany: null,

};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setFoundCompany: (state, action) => {
      state.foundCompany = action.payload;
    },
  },
});

export const { setFoundCompany } = companySlice.actions;

export default companySlice.reducer;
