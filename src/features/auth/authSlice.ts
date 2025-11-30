import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "./authType";

const initialState: AuthState = {
  username: null,
  token_user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      state.username = action.payload.username;
      state.token_user = action.payload.token_user;
      const authData = {
        username: action.payload.username,
        token: action.payload.token_user,
      };
      localStorage.setItem("token_app", JSON.stringify(authData));
    },
    logout: (state) => {
      state.username = null;
      state.token_user = null;
      localStorage.removeItem("token_app");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
