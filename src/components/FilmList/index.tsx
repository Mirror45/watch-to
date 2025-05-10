'use client';

import { JSX } from 'react';

import { useAppSelector } from '@/store/hooks';
import { selectFilteredFilms } from '@/store/selectors/films/films';

import { FilmCard } from '../FilmCard';

export function FilmList(): JSX.Element {
  const films = useAppSelector(selectFilteredFilms);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}
