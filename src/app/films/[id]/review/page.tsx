import { JSX } from 'react';

interface AddReviewPageProps {
  params: { id: string };
}

export default function AddReviewPage({ params }: AddReviewPageProps): JSX.Element {
  return <h1>Add a review to the movie ID: {params.id}</h1>;
}
