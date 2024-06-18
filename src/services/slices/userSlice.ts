import {
  TLoginData,
  TRegisterData,
  getUserApi,
  loginUserApi,
  logoutApi,
  registerUserApi,
  updateUserApi
} from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TUser } from '@utils-types';
import { deleteCookie, setCookie } from '../../utils/cookie';

type TUserState = {
  isAuthChecked: boolean;
  isAuthenticated: boolean;
  data: TUser;
  loginUserRequest: boolean;
  registerUserRequest: boolean;
};

const initialState: TUserState = {
  isAuthChecked: false,
  isAuthenticated: false,
  data: {
    name: '',
    email: ''
  },
  loginUserRequest: false,
  registerUserRequest: false
};

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }: TLoginData) => {
    const data = await loginUserApi({ email, password });
    setCookie('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    return data;
  }
);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async ({ email, name, password }: TRegisterData) =>
    await registerUserApi({ email, name, password })
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user: TRegisterData) => await updateUserApi(user)
);

export const logoutUser = createAsyncThunk('user/logoutUser', async () =>
  logoutApi()
);

export const getUser = createAsyncThunk('user/getUser', async () =>
  getUserApi()
);

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  selectors: {
    getUserData: (state) => state.data,
    getUserIsAuthenticated: (state) => state.isAuthenticated
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginUserRequest = true;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loginUserRequest = false;
        state.isAuthChecked = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.data = action.payload.user;
        state.registerUserRequest = false;
        state.isAuthenticated = true;
        state.isAuthChecked = true;
      })
      .addCase(registerUser.pending, (state) => {
        state.registerUserRequest = true;
      })
      .addCase(registerUser.rejected, (state) => {
        state.registerUserRequest = false;
        state.isAuthChecked = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.data = action.payload.user;
        state.registerUserRequest = false;
        state.isAuthenticated = true;
        state.isAuthChecked = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.data = action.payload.user;
        state.isAuthenticated = true;
        state.isAuthChecked = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.data = action.payload.user;
        state.isAuthenticated = true;
        state.isAuthChecked = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        localStorage.clear();
        deleteCookie('accessToken');
        state.data = {
          name: '',
          email: ''
        };
        state.isAuthenticated = false;
      });
  }
});

export const { getUserData, getUserIsAuthenticated } = userSlice.selectors;
export const userReducer = userSlice.reducer;
