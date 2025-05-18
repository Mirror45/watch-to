import { createAsyncThunk } from '@reduxjs/toolkit';

import { FETCH_FAVORITE_FILMS, UPDATE_FAVORITE_STATUS } from '@/store/actionTypes/films';
import { ThunkError } from '@/types/errors';
import { Film } from '@/types/film';
import { api } from '@/utils/api';
import { handleError } from '@/utils/handleError';

export const fetchFavoriteFilms = createAsyncThunk<Film[], void, { rejectValue: ThunkError }>(
  FETCH_FAVORITE_FILMS,
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get<Film[]>('/favorite');
      return data;
    } catch (error) {
      handleError(error, 'Failed to load favorite films');
      return thunkAPI.rejectWithValue({ message: 'Failed to load favorite films' });
    }
  },
);

export const updateFavoriteStatus = createAsyncThunk<
  Film,
  { film_id: number; status: number },
  { rejectValue: ThunkError }
>(UPDATE_FAVORITE_STATUS, async ({ film_id, status }, thunkAPI) => {
  try {
    const { data } = await api.post<Film>(`/favorite/${film_id}/${status}`);
    return data;
  } catch (error) {
    handleError(error, 'Failed to update favorite status');
    return thunkAPI.rejectWithValue({ message: 'Failed to update favorite status' });
  }
});
