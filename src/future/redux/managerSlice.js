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
    loading(state, action) {
      state.loading = action.payload.workers;
    },
  },
});

export default managerSlice.reducer;
export const { getCompanyById, loading } = managerSlice.actions;
