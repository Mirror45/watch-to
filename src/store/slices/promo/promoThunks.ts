import { createAsyncThunk } from '@reduxjs/toolkit';

import { FETCH_PROMO_FILM } from '@/store/actionTypes/films';
import { ThunkError } from '@/types/errors';
import { Film } from '@/types/film';
import { api } from '@/utils/api';
import { handleError } from '@/utils/handleError';

export const fetchPromoFilm = createAsyncThunk<Film, void, { rejectValue: ThunkError }>(
  FETCH_PROMO_FILM,
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get<Film>('/promo');
      return data;
    } catch (error) {
      handleError(error, 'Failed to load promo film');
      return thunkAPI.rejectWithValue({ message: 'Failed to load promo film' });
    }
  },
);
