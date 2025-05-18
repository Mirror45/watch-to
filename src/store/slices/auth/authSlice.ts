import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginUser, logoutUser, restoreSession } from './authThunks';
import { AuthInfo, AuthState } from './authTypes';

const SLICE_NAME_AUTH = 'auth';

const initialState: AuthState = {
  user: null,
  token: null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: SLICE_NAME_AUTH,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<AuthInfo>) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = typeof action.payload === 'string' ? action.payload : 'Login failed';
      })
      .addCase(restoreSession.fulfilled, (state, action: PayloadAction<AuthInfo>) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(restoreSession.rejected, (state) => {
        state.status = 'idle';
      })
      .addCase(logoutUser.fulfilled, () => initialState);
  },
});

export default authSlice.reducer;
