import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchFilms } from './filmThunks';
import { FilmsState } from './filmTypes';

const initialState: FilmsState = {
  all: [],
  isLoading: false,
  error: null,
  selectedGenre: 'All genres',
  shownCount: 8,
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setGenre(state, action: PayloadAction<string>) {
      state.selectedGenre = action.payload;
      state.shownCount = 8;
    },
    showMore(state) {
      state.shownCount += 8;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.all = action.payload;
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Unknown error';
      });
  },
});

export const { setGenre, showMore } = filmsSlice.actions;
export default filmsSlice.reducer;
