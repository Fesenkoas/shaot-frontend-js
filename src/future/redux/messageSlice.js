import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  message: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    getMessage(state, action) {
      state.message = action.payload;
    },
  },
});
export default messageSlice.reducer;
export const { getMessage } = messageSlice.actions;
