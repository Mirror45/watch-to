import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from '@/store/slices/auth';
import { filmReducer } from '@/store/slices/films';
import { promoReducer } from '@/store/slices/promo';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    films: filmReducer,
    promo: promoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
