import { JSX } from 'react';

const genres = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

export function GenreList(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item ${genre === 'All genres' ? 'catalog__genres-item--active' : ''}`}
        >
          <a href="#" className="catalog__genres-link">
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}
