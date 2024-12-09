import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import registerReducer from "./slices/registerSlice";
import simulatorSlice from "./slices/simulatorSlice";

export const store = configureStore({
  reducer: {
    //colocar slices:
    login: loginReducer,
    register: registerReducer,
    simulator: simulatorSlice,
  },
});
