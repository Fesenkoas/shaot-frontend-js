import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  workers: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    getAllWorkers(state, action) {
      state.workers = action.payload;
      state.loading = true;
    },
    loading(state, action) {
      state.loading = action.payload;
    },
  },
});
export default adminSlice.reducer;
export const { getAllWorkers, loading } = adminSlice.actions;