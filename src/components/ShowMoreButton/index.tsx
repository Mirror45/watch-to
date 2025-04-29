import { JSX } from 'react';

export function ShowMoreButton(): JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button">
        Show more
      </button>
    </div>
  );
}
