import { JSX } from 'react';

interface FilmLayoutProps {
  children: React.ReactNode;
}

export default function FilmLayout({ children }: FilmLayoutProps): JSX.Element {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
