import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  message: "",
};

const adminSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    // getMessage(state, action) {
    //   state.message = action.payload;
    // },
  },
});
export default adminSlice.reducer;
export const { getMessage } = adminSlice.actions;