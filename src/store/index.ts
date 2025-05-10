import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from '@/store/slices/auth';
import { filmReducer } from '@/store/slices/films';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    films: filmReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
