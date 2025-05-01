import { JSX } from 'react';

import { films } from '@/mocks/films';

import { FilmCard } from '../FilmCard';

export function FilmList(): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard key={film.id} id={film.id} title={film.title} image={film.image} />
      ))}
    </div>
  );
}
