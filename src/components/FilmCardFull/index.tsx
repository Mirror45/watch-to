import { JSX } from 'react';

import { Background } from './Background';
import { Poster } from './Poster';

export function FilmCardFull(): JSX.Element {
  return (
    <div className="film-card__header">
      <Background />
      <h1 className="visually-hidden">WTW</h1>
      <Poster />
    </div>
  );
}
