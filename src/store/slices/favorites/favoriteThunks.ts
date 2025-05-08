import { createAsyncThunk } from '@reduxjs/toolkit';

import { Film } from '@/types/film';
import { api } from '@/utils/api';
import { handleError } from '@/utils/handleError';

export const fetchFavoriteFilms = createAsyncThunk<Film[], void, { rejectValue: string }>(
  'films/fetchFavoriteFilms',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get<Film[]>('/favorite');
      return data;
    } catch (error) {
      handleError(error, 'Failed to load favorite films');
      return thunkAPI.rejectWithValue('Failed to load favorite films');
    }
  },
);

export const updateFavoriteStatus = createAsyncThunk<
  Film,
  { film_id: number; status: number },
  { rejectValue: string }
>('films/updateFavoriteStatus', async ({ film_id, status }, thunkAPI) => {
  try {
    const { data } = await api.post<Film>(`/favorite/${film_id}/${status}`);
    return data;
  } catch (error) {
    handleError(error, 'Failed to update favorite status');
    return thunkAPI.rejectWithValue('Failed to update favorite status');
  }
});
