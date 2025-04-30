import { JSX } from 'react';

import { FilmHero } from '@/components/FilmHero';
import { FilmInfo } from '@/components/FilmInfo';
import { MoreLikeThis } from '@/components/MoreLikeThis';

interface FilmPageProps {
  params: { id: string };
}

export default function FilmPage({ params }: FilmPageProps): JSX.Element {
  const { id } = params;

  return (
    <>
      <section className="film-card film-card--full">
        <FilmHero id={id} />
        <FilmInfo />
      </section>

      <div className="page-content">
        <MoreLikeThis />
      </div>
    </>
  );
}
