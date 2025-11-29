import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "./authType";

const initialState: AuthState = {
  username: "",
  token_user: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      state.username = action.payload.username;
      state.token_user = action.payload.token_user;
      localStorage.setItem("username", action.payload.username);
    },
    logout: (state) => {
      state.username = "";
      state.token_user = "";
      localStorage.removeItem("username");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
