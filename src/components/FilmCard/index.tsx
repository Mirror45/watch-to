'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JSX, useState } from 'react';

import { Film } from '@/types/film';

interface FilmCardProps {
  film: Film;
}

export function FilmCard({ film }: FilmCardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/films/${film.id}`}>
        <div className="small-film-card__image">
          {isHovered ? (
            <video
              src={film.previewVideoLink}
              width={280}
              height={175}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <Image src={film.previewImage} alt={film.name} width={280} height={175} />
          )}
        </div>
      </Link>

      <h3 className="small-film-card__title">
        <Link href={`/films/${film.id}`} className="small-film-card__link">
          {film.name}
        </Link>
      </h3>
    </article>
  );
}
