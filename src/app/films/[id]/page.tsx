import { JSX } from 'react';

import { FilmHero } from '@/components/FilmHero';
import { FilmInfo } from '@/components/FilmInfo';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { MoreLikeThis } from '@/components/MoreLikeThis';

interface FilmPageProps {
  params: { id: string };
}

export default function FilmPage({ params }: FilmPageProps): JSX.Element {
  const { id } = params;

  return (
    <>
      <Header />
      <section className="film-card film-card--full">
        <FilmHero id={id} />
        <FilmInfo />
      </section>

      <div className="page-content">
        <MoreLikeThis />
      </div>
      <Footer />
    </>
  );
}
