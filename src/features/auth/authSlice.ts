import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "./authType";

const initialState: AuthState = {
  username: "",
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      state.username = action.payload.username;
      state.isLogin = true;
      localStorage.setItem("username", action.payload.username);
    },
    logout: (state) => {
      state.username = "";
      state.isLogin = false;
      localStorage.removeItem("username");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
