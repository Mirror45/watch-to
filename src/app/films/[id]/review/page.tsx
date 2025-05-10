import { JSX } from 'react';

import { AddReviewForm } from '@/components/AddReviewForm';
import { FilmCardFull } from '@/components/FilmCardFull';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function AddReviewPage(): JSX.Element {
  return (
    <ProtectedRoute>
      <section className="film-card film-card--full">
        <FilmCardFull />
        <AddReviewForm />
      </section>
    </ProtectedRoute>
  );
}
