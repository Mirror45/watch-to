import Image from 'next/image';
import { JSX } from 'react';

export function Poster(): JSX.Element {
  return (
    <div className="film-card__poster film-card__poster--small">
      <Image
        src="/img/the-grand-budapest-hotel-poster.jpg"
        alt="The Grand Budapest Hotel poster"
        width="218"
        height="327"
      />
    </div>
  );
}
