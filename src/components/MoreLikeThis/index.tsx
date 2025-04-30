import { FilmCard } from '@/components/FilmCard';

const moreFilms = [
  {
    id: '1',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    image: '/img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  },
  {
    id: '2',
    title: 'Bohemian Rhapsody',
    image: '/img/bohemian-rhapsody.jpg',
  },
  {
    id: '3',
    title: 'Macbeth',
    image: '/img/macbeth.jpg',
  },
  {
    id: '4',
    title: 'Aviator',
    image: '/img/aviator.jpg',
  },
];

export function MoreLikeThis() {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        {moreFilms.map((film) => (
          <FilmCard key={film.id} id={film.id} title={film.title} image={film.image} />
        ))}
      </div>
    </section>
  );
}
