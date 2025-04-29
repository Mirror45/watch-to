import { JSX } from 'react';

import { PromoFilm } from '@/components/PromoFilm';

export default function HomePage(): JSX.Element {
  return (
    <>
      <PromoFilm />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
        </section>
      </div>
    </>
  );
}
