import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  company: [],
  schedule:[],
  configurate:{},
  checkDay:[]

};

const managerSlice = createSlice({
  name: "manager",
  initialState,
  reducers: {
    getCompanyById(state, action) {
      state.company = action.payload;
      state.loading = true;
    },
    getScheduleCompany(state, action) {
      state.company = action.payload;
      state.loading = true;
    },
    сompanySchedule(state, action){
      state.schedule = action.payload;
      state.loading = true;
    },
    loading(state, action) {
      state.loading = action.payload;
    },
    weekConfigurate(state, action){
      state.configurate = action.payload;
      state.checkDay = action.payload.workDays;
      state.loading = true;
    },
  },
});
export const reduxManager = (state) => state.manager;
export default managerSlice.reducer;
export const { getCompanyById, getScheduleCompany,сompanySchedule, loading, weekConfigurate } =
  managerSlice.actions;
