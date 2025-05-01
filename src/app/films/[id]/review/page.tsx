import { JSX } from 'react';

import { AddReviewForm } from '@/components/AddReviewForm';
import { FilmCardFull } from '@/components/FilmCardFull';

export default function AddReviewPage(): JSX.Element {
  return (
    <>
      <section className="film-card film-card--full">
        <FilmCardFull />
        <AddReviewForm />
      </section>
    </>
  );
}
