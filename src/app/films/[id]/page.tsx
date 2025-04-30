import { JSX } from 'react';

import { FilmHero } from '@/components/FilmHero';

interface FilmPageProps {
  params: { id: string };
}

export default function FilmPage({}: FilmPageProps): JSX.Element {
  return (
    <>
      <section className="film-card film-card--full">
        <FilmHero />
      </section>

      <div className="page-content"></div>
    </>
  );
}
