import { JSX } from 'react';

import { RatingStars } from '@/components/AddReviewForm/RatingStars';
import { ReviewTextarea } from '@/components/AddReviewForm/ReviewTextarea';

export function AddReviewForm(): JSX.Element {
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <RatingStars />
        </div>
        <ReviewTextarea />
      </form>
    </div>
  );
}
