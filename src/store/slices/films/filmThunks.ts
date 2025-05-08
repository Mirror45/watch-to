import { createAsyncThunk } from '@reduxjs/toolkit';

import { Film } from '@/types/film';
import { api } from '@/utils/api';
import { handleError } from '@/utils/handleError';

export const fetchFilms = createAsyncThunk<Film[], void, { rejectValue: string }>(
  'films/fetchFilms',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get<Film[]>('/films');
      return data;
    } catch (error) {
      handleError(error, 'Failed to load films');
      return thunkAPI.rejectWithValue('Failed to load films');
    }
  },
);

export const fetchFilmById = createAsyncThunk<Film, { id: number }, { rejectValue: string }>(
  'films/fetchFilmById',
  async ({ id }, thunkAPI) => {
    try {
      const { data } = await api.get<Film>(`/films/${id}`);
      return data;
    } catch (error) {
      handleError(error, 'Failed to load film');
      return thunkAPI.rejectWithValue('Failed to load film');
    }
  },
);

export const fetchSimilarFilms = createAsyncThunk<Film[], { id: number }, { rejectValue: string }>(
  'films/fetchSimilarFilms',
  async ({ id }, thunkAPI) => {
    try {
      const { data } = await api.get<Film[]>(`/films/${id}/similar`);
      return data;
    } catch (error) {
      handleError(error, 'Failed to load similar films');
      return thunkAPI.rejectWithValue('Failed to load similar films');
    }
  },
);
