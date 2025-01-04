import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import currentContactReducer from "./features/currentContact/currentContactSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      currentContact: currentContactReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
