import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  isAuth: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loading(state, action) {
      state.loading = action.payload;
    },
    isAuth(state, action) {
      state.isAuth = action.payload;
    },
  },
});
export const checkIsAuth = (state) => Boolean(state.auth.isAuth);
export const { loading } = authSlice.actions;
export default authSlice.reducer;
