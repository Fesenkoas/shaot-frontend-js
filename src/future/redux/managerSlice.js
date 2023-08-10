import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  company: [],
};

const managerSlice = createSlice({
  name: "manager",
  initialState,
  reducers: {
    getCompanyById(state, action) {
      console.log(action.payload);
      state.company = action.payload;
      state.loading = true;
    },
    getScheduleCompany(state, action) {
      console.log(action.payload);
      state.company = action.payload;
      state.loading = true;
    },
    loading(state, action) {
      state.loading = action.payload;
    },
  },
});
export const reduxManager = (state) => state.manager;
export default managerSlice.reducer;
export const { getCompanyById, getScheduleCompany, loading } =
  managerSlice.actions;
