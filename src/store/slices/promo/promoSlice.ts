import { createSlice } from '@reduxjs/toolkit';

import { fetchPromoFilm } from './promoThunks';
import { PromoState } from './promoTypes';

const initialState: PromoState = {
  data: null,
  isLoading: false,
  error: null,
};

const promoSlice = createSlice({
  name: 'promo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPromoFilm.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchPromoFilm.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Unknown error';
      });
  },
});

export default promoSlice.reducer;
