import { JSX } from 'react';

import { GenreList } from '@/components/GenreList';
import { PromoFilm } from '@/components/PromoFilm';

export default function HomePage(): JSX.Element {
  return (
    <>
      <PromoFilm />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList />
        </section>
      </div>
    </>
  );
}
