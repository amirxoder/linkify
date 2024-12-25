import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../store";

interface AuthState {
  authState: "login" | "verify";
  email: string;
}

const initialState: AuthState = {
  authState: "login",
  email: "",
};

// hi

export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setAuthState: (state, action: PayloadAction<"login" | "verify">) => {
      if (action.payload === "login") {
        state.authState = "login";
      }
      if (action.payload === "verify") state.authState = "verify";
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setAuthState, setEmail } = authSlice.actions;
export const selectAuthState = (state: RootState) => state.auth.authState;

export default authSlice.reducer;
