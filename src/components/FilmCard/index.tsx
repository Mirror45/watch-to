import Image from 'next/image';
import { JSX } from 'react';

interface FilmCardProps {
  title: string;
  image: string;
}

export default function FilmCard({ title, image }: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <Image src={image} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
}
