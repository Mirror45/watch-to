import { JSX } from 'react';

interface FilmPageProps {
  params: { id: string };
}

export default function FilmPage({ params }: FilmPageProps): JSX.Element {
  return <h1>Film ID: {params.id}</h1>;
}
