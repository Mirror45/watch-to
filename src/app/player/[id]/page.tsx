import { JSX } from 'react';

interface PlayerPageProps {
  params: { id: string };
}

export default function PlayerPage({ params }: PlayerPageProps): JSX.Element {
  return <h1>Movie Player ID: {params.id}</h1>;
}
