import { JSX } from 'react';

import { FilmList } from '@/components/FilmList';
import { GenreList } from '@/components/GenreList';
import { PromoFilm } from '@/components/PromoFilm';
import { ShowMoreButton } from '@/components/ShowMoreButton';

export default function HomePage(): JSX.Element {
  return (
    <>
      <PromoFilm />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList />
          <FilmList />
          <ShowMoreButton />
        </section>
      </div>
    </>
  );
}
