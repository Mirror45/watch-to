'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JSX, useCallback, useState } from 'react';

import { Film } from '@/types/film';

interface FilmCardProps {
  film: Film;
}

export function FilmCard({ film }: FilmCardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  const handleFocus = useCallback(() => setIsHovered(true), []);
  const handleBlur = useCallback(() => setIsHovered(false), []);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
      aria-label={`Go to movie ${film.name}`}
    >
      <Link href={`/films/${film.id}`} className="small-film-card__link-wrapper">
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
              preload="none"
            />
          ) : (
            <Image
              src={film.previewImage}
              alt={film.name}
              width={280}
              height={175}
              sizes="(max-width: 768px) 100vw, 280px"
              priority={false}
            />
          )}
        </div>

        <h3 className="small-film-card__title">{film.name}</h3>
      </Link>
    </article>
  );
}
