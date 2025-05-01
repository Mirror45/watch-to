import Link from 'next/link';
import { JSX } from 'react';

import UserBlock from '../UserBlock';

interface HeaderProps {
  pageTitle?: string;
  showBreadcrumbs?: boolean;
  filmTitle?: string;
  filmId?: string;
  showUserBlock?: boolean;
}

export default function Header({
  pageTitle,
  showBreadcrumbs,
  filmTitle,
  filmId,
  showUserBlock = true,
}: HeaderProps): JSX.Element {
  return (
    <header className="page-header user-page__head">
      <div className="page-header__container">
        <div className="logo">
          <Link href="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        {pageTitle && <h1 className="page-title user-page__title">{pageTitle}</h1>}

        {showBreadcrumbs && filmTitle && filmId && (
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link href={`/films/${filmId}`} className="breadcrumbs__link">
                  {filmTitle}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link">{pageTitle}</span>
              </li>
            </ul>
          </nav>
        )}

        {showUserBlock && <UserBlock isAuth={false} />}
      </div>
    </header>
  );
}
