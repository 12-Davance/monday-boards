import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "../../api/authAPI";
import { toast } from "react-toastify";

const initialState = {
  isAuthenticated: {
    status: false,
    access_token: null,
    user: null,
  },
};

export const loginUser = createAsyncThunk("auth/login", async (data) => {
  return login(data);
});

export const registerUser = createAsyncThunk("auth/register", async (data) => {
  return register(data);
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    // login user cases
    builder.addCase(loginUser.pending, () => {
      toast("Authenticating...", { toastId: "authenticate", isLoading: true });
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = {
        status: true,
        access_token: action.payload.token,
        user: action.payload.user,
      };
      toast.dismiss("authenticate");
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isAuthenticated = {
        status: false,
        access_token: null,
        user: null,
      };
      toast.dismiss("authenticate");
      toast(action.error.message, { type: "error", autoClose: 3000 });
    });
    // register user cases
    builder.addCase(registerUser.pending, () => {
      toast("Signing you up...", { toastId: "register", isLoading: true });
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isAuthenticated = {
        status: true,
        access_token: action.payload.token,
        user: action.payload.user,
      };
      toast.dismiss("register");
      toast("Sign up successful", { type: "success", autoClose: 3000 });
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isAuthenticated = {
        status: false,
        access_token: null,
        user: null,
      };
      toast.dismiss("register");
      toast(action.error.message, { type: "error", autoClose: 3000 });
    });
  },
});

export default authSlice.reducer;
