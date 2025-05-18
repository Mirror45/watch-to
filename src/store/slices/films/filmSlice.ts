import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchFilms } from './filmThunks';
import { FilmsState } from './filmTypes';

const SLICE_NAME_FILMS = 'films';
const INITIAL_SHOWN_COUNT = 8;

const initialState: FilmsState = {
  all: [],
  isLoading: false,
  error: null,
  selectedGenre: 'All genres',
  shownCount: INITIAL_SHOWN_COUNT,
};

const filmsSlice = createSlice({
  name: SLICE_NAME_FILMS,
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.selectedGenre = action.payload;
      state.shownCount = INITIAL_SHOWN_COUNT;
    },
    showMore: (state) => {
      state.shownCount += INITIAL_SHOWN_COUNT;
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
        state.error = typeof action.payload === 'string' ? action.payload : 'Failed to load films';
      });
  },
});

export const { setGenre, showMore } = filmsSlice.actions;
export default filmsSlice.reducer;
