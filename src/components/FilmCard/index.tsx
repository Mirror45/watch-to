import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

interface FilmCardProps {
  id: string;
  title: string;
  image: string;
}

export function FilmCard({ id, title, image }: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <Link href={`/films/${id}`}>
        <div className="small-film-card__image">
          <Image src={image} alt={title} width={280} height={175} />
        </div>
      </Link>

      <h3 className="small-film-card__title">
        <Link href={`/films/${id}`} className="small-film-card__link">
          {title}
        </Link>
      </h3>
    </article>
  );
}
