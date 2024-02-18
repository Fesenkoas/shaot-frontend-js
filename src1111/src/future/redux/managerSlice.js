import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  company: [],
  schedule: [],
  configurate: {},
  checkDay: [],
  weekNames: [],
};

const managerSlice = createSlice({
  name: "manager",
  initialState,
  reducers: {
    getCompanyById(state, action) {
      state.loading = false;
      state.company = action.payload;
      state.loading = true;
    },
    сompanySchedule(state, action) {
      state.loading = false;
      state.schedule = action.payload;
      state.loading = true;
    },
    loading(state, action) {
      state.loading = action.payload;
    },
    weekConfigurate(state, action) {
      state.loading = false;
      state.checkDay = action.payload.workDays;
      state.configurate = action.payload;
      state.loading = true;
    },
    weekNames(state, action) {
      state.loading = false;
      state.weekNames = action.payload;
      state.loading = true;
    },
  },
});
export const reduxManager = (state) => state.manager;
export default managerSlice.reducer;
export const {
  getCompanyById,
  сompanySchedule,
  loading,
  weekConfigurate,
  weekNames,
} = managerSlice.actions;
