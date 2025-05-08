'use client';

import { ReactNode, useEffect } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/store';
import { useAppDispatch } from '@/store/hooks';
import { restoreSession } from '@/store/slices/auth';

interface Props {
  children: ReactNode;
}

function RestoreSession() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(restoreSession());
  }, [dispatch]);

  return null;
}

export default function StoreProvider({ children }: Props) {
  return (
    <Provider store={store}>
      <RestoreSession />
      {children}
    </Provider>
  );
}
