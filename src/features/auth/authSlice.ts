import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "./authType";

const initialState: AuthState = {
  username: "",
  token_user: "",
};
const AUTH_STORAGE = "user";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      const dataToPersist = {
        username: action.payload.username,
        token_user: action.payload.token_user,
      };
      localStorage.setItem(AUTH_STORAGE, JSON.stringify(dataToPersist));
    },
    logout: () => {
      localStorage.removeItem(AUTH_STORAGE);
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
