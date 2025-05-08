import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '@/utils/api';
import { handleError } from '@/utils/handleError';
import { getToken, removeToken, setToken } from '@/utils/token';

import { AuthInfo, LoginPayload } from './authTypes';

export const loginUser = createAsyncThunk<AuthInfo, LoginPayload, { rejectValue: string }>(
  'auth/loginUser',
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await api.post<AuthInfo>('/login', { email, password });
      setToken(data.token);
      return data;
    } catch (error) {
      handleError(error, 'Login failed');
      return thunkAPI.rejectWithValue('Login failed');
    }
  },
);

export const restoreSession = createAsyncThunk<AuthInfo, void, { rejectValue: string }>(
  'auth/restoreSession',
  async (_, thunkAPI) => {
    const token = getToken();
    if (!token) return thunkAPI.rejectWithValue('No token found');

    try {
      const { data } = await api.get<AuthInfo>('/login');
      return { ...data, token };
    } catch (error) {
      handleError(error, 'Session restore failed');
      return thunkAPI.rejectWithValue('Session restore failed');
    }
  },
);

export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      await api.delete('/logout');
      removeToken();
    } catch (error) {
      handleError(error, 'Logout failed');
      return thunkAPI.rejectWithValue('Logout failed');
    }
  },
);
