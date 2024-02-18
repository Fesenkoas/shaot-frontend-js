import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,

  employeeShift: [],
  configurate: null,
  checkDay: [],
  weekNames: [],
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    getSchedule(state, action) {
      state.loading = false;
      state.employeeShift = action.payload;
      state.loading = true;
    },
    loading(state, action) {
      state.loading = action.payload;
    },
  },
});

export default employeeSlice.reducer;
export const { loading, getSchedule } = employeeSlice.actions;
