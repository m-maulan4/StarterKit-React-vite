import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
  username: "",
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      (state.username = action.payload.username), (state.isLogin = true);
    },
    logout: (state) => {
      (state.username = ""), (state.isLogin = false);
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
