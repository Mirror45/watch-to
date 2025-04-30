import Image from 'next/image';
import Link from 'next/link';

interface FilmHeroProps {
  id: string;
}

export function FilmHero({ id }: FilmHeroProps) {
  return (
    <div className="film-card__hero">
      <div className="film-card__bg" style={{ height: '555px', width: '100%' }}>
        <Image
          src="/img/bg-the-grand-budapest-hotel.jpg"
          alt="The Grand Budapest Hotel"
          fill
          style={{
            objectFit: 'cover',
            zIndex: 0,
          }}
        />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <div className="film-card__wrap">
        <div className="film-card__desc">
          <h2 className="film-card__title">The Grand Budapest Hotel</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">Drama</span>
            <span className="film-card__year">2014</span>
          </p>

          <div className="film-card__buttons">
            <button className="btn btn--play film-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list film-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add" />
              </svg>
              <span>My list</span>
            </button>
            <Link href={`/films/${id}/review`} className="btn film-card__button">
              Add review
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
