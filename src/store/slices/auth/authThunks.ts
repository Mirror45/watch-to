import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { api } from '@/utils/axios';

import { AuthInfo, LoginPayload } from './authTypes';

export const loginUser = createAsyncThunk<AuthInfo, LoginPayload, { rejectValue: string }>(
  'auth/loginUser',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await api.post<AuthInfo>('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const err = error as AxiosError<{ error: string }>;
        return thunkAPI.rejectWithValue(err.response?.data?.error || 'Login failed');
      }
      return thunkAPI.rejectWithValue('Login failed');
    }
  },
);

export const restoreSession = createAsyncThunk<AuthInfo, void, { rejectValue: string }>(
  'auth/restoreSession',
  async (_, thunkAPI) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) return thunkAPI.rejectWithValue('No token found');

    try {
      const response = await api.get<AuthInfo>('/login');
      return { ...response.data, token };
    } catch {
      return thunkAPI.rejectWithValue('Session restore failed');
    }
  },
);

export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      await api.delete('/logout');
      localStorage.removeItem('token');
    } catch {
      return thunkAPI.rejectWithValue('Logout failed');
    }
  },
);
