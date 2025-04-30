import Image from 'next/image';

export function FilmInfo() {
  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <Image
            src="/img/the-grand-budapest-hotel-poster.jpg"
            alt="The Grand Budapest Hotel poster"
            width="218"
            height="327"
          />
        </div>

        <div className="film-card__desc">
          <nav className="film-nav film-card__nav">
            <ul className="film-nav__list">
              <li className="film-nav__item film-nav__item--active">
                <a href="#" className="film-nav__link">
                  Overview
                </a>
              </li>
              <li className="film-nav__item">
                <a href="#" className="film-nav__link">
                  Details
                </a>
              </li>
              <li className="film-nav__item">
                <a href="#" className="film-nav__link">
                  Reviews
                </a>
              </li>
            </ul>
          </nav>

          <div className="film-rating">
            <div className="film-rating__score">8,9</div>
            <p className="film-rating__meta">
              <span className="film-rating__level">Very good</span>
              <span className="film-rating__count">240 ratings</span>
            </p>
          </div>

          <div className="film-card__text">
            <p>
              In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over
              by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes
              Gustave&apos;s friend and protege.
            </p>
            <p>
              Gustave prides himself on providing first-class service to the hotel&apos;s guests,
              including satisfying the sexual needs of the many elderly women who stay there...
            </p>

            <p className="film-card__director">
              <strong>Director: Wes Anderson</strong>
            </p>
            <p className="film-card__starring">
              <strong>
                Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
