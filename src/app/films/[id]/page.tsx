import { JSX } from 'react';

import { FilmHero } from '@/components/FilmHero';
import { FilmInfo } from '@/components/FilmInfo';

interface FilmPageProps {
  params: { id: string };
}

export default function FilmPage({}: FilmPageProps): JSX.Element {
  return (
    <>
      <section className="film-card film-card--full">
        <FilmHero />
        <FilmInfo />
      </section>

      <div className="page-content"></div>
    </>
  );
}
