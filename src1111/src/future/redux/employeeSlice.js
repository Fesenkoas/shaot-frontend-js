import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
  };

const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
    //   getUsers(state, action) {
    //     console.log(action.payload.items);
    //     state.users = action.payload.items;
    //     state.totalCount = action.payload.totalCount;
    //   },
     
    },
  });
  
  export default employeeSlice.reducer;
  export const { getUsers } = employeeSlice.actions;