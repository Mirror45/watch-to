import { createAsyncThunk } from '@reduxjs/toolkit';

import { FETCH_FILM_BY_ID, FETCH_FILMS, FETCH_SIMILAR_FILMS } from '@/store/actionTypes/films';
import { ThunkError } from '@/types/errors';
import { Film } from '@/types/film';
import { api } from '@/utils/api';
import { handleError } from '@/utils/handleError';

export const fetchFilms = createAsyncThunk<Film[], void, { rejectValue: ThunkError }>(
  FETCH_FILMS,
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get<Film[]>('/films');
      return data;
    } catch (error) {
      handleError(error, 'Failed to load films');
      return thunkAPI.rejectWithValue({ message: 'Failed to load films' });
    }
  },
);

export const fetchFilmById = createAsyncThunk<Film, { id: string }, { rejectValue: ThunkError }>(
  FETCH_FILM_BY_ID,
  async ({ id }, thunkAPI) => {
    try {
      const { data } = await api.get<Film>(`/films/${id}`);
      return data;
    } catch (error) {
      handleError(error, 'Failed to load film');
      return thunkAPI.rejectWithValue({ message: 'Failed to load film' });
    }
  },
);

export const fetchSimilarFilms = createAsyncThunk<
  Film[],
  { id: string },
  { rejectValue: ThunkError }
>(FETCH_SIMILAR_FILMS, async ({ id }, thunkAPI) => {
  try {
    const { data } = await api.get<Film[]>(`/films/${id}/similar`);
    return data;
  } catch (error) {
    handleError(error, 'Failed to load similar films');
    return thunkAPI.rejectWithValue({ message: 'Failed to load similar films' });
  }
});
