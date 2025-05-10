import { JSX } from 'react';

import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function MyListPage(): JSX.Element {
  return (
    <ProtectedRoute>
      <h1>My list</h1>
    </ProtectedRoute>
  );
}
