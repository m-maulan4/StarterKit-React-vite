import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "./authType";

const initialState: AuthState = {
  username: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.username = "";
      state.token = "";
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
