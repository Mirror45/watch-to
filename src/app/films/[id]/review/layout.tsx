'use client';

import { useParams } from 'next/navigation';
import { JSX } from 'react';

import Header from '@/components/Header';
import { films } from '@/mocks/films';

interface AddReviewLayoutProps {
  children: React.ReactNode;
}

export default function AddReviewLayout({ children }: AddReviewLayoutProps): JSX.Element {
  const params = useParams();
  const filmId = params.id as string;

  const film = films.find((film) => film.id === filmId);
  const filmTitle = film?.title ?? 'Unknown Film';

  return (
    <div>
      <Header pageTitle="Add review" showBreadcrumbs={true} filmTitle={filmTitle} filmId={filmId} />
      <main>{children}</main>
    </div>
  );
}
