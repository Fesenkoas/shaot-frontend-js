import { configureStore } from "@reduxjs/toolkit";
import { loggerEnhancer } from "../../midlleWare/thunkEnhancer";
import { logger } from "../../midlleWare/loggerWare";
import managerSlice from "../redux/managerSlice";
import employeeSlice from "../redux/employeeSlice";

export const store = configureStore({
  reducer: {
    manager: managerSlice,
    employee: employeeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerEnhancer, logger),
});
