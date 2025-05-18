import { createAsyncThunk } from '@reduxjs/toolkit';

import { LOGIN_USER, LOGOUT_USER, RESTORE_SESSION } from '@/store/actionTypes/auth';
import { ThunkError } from '@/types/errors';
import { api } from '@/utils/api';
import { handleError } from '@/utils/handleError';
import { getToken, removeToken, setToken } from '@/utils/token';

import { AuthInfo, LoginPayload } from './authTypes';

export const loginUser = createAsyncThunk<AuthInfo, LoginPayload, { rejectValue: ThunkError }>(
  LOGIN_USER,
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await api.post<AuthInfo>('/login', { email, password });
      setToken(data.token);
      return data;
    } catch (error) {
      handleError(error, 'Login failed');
      return thunkAPI.rejectWithValue({ message: 'Login failed' });
    }
  },
);

export const restoreSession = createAsyncThunk<AuthInfo, void, { rejectValue: ThunkError }>(
  RESTORE_SESSION,
  async (_, thunkAPI) => {
    const token = getToken();
    if (!token) return thunkAPI.rejectWithValue({ message: 'No token found' });

    try {
      const { data } = await api.get<AuthInfo>('/login');
      return { ...data, token };
    } catch (error) {
      handleError(error, 'Session restore failed');
      return thunkAPI.rejectWithValue({ message: 'Session restore failed' });
    }
  },
);

export const logoutUser = createAsyncThunk<void, void, { rejectValue: ThunkError }>(
  LOGOUT_USER,
  async (_, thunkAPI) => {
    try {
      await api.delete('/logout');
      removeToken();
    } catch (error) {
      handleError(error, 'Logout failed');
      return thunkAPI.rejectWithValue({ message: 'Logout failed' });
    }
  },
);
