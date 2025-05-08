import { createAsyncThunk } from '@reduxjs/toolkit';

import { Film } from '@/types/film';
import { api } from '@/utils/api';
import { handleError } from '@/utils/handleError';

export const fetchPromoFilm = createAsyncThunk<Film, void, { rejectValue: string }>(
  'films/fetchPromoFilm',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get<Film>('/promo');
      return data;
    } catch (error) {
      handleError(error, 'Failed to load promo film');
      return thunkAPI.rejectWithValue('Failed to load promo film');
    }
  },
);
