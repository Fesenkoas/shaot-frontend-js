import { configureStore } from "@reduxjs/toolkit";
import { loggerEnhancer } from "../../midlleWare/thunkEnhancer";
import { logger } from "../../midlleWare/loggerWare";
import managerSlice from "../redux/managerSlice";
import employeeSlice from "../redux/employeeSlice";
import messageSlice from "../redux/messageSlice";
import adminSlice from "../redux/adminSlice";

export const store = configureStore({
  reducer: {
    admin:adminSlice,
    manager: managerSlice,
    employee: employeeSlice,
    message:messageSlice,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerEnhancer, logger),
});
