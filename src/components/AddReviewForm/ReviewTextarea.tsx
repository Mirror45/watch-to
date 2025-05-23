import { JSX } from 'react';

export function ReviewTextarea(): JSX.Element {
  return (
    <div className="add-review__text">
      <textarea
        className="add-review__textarea"
        name="review-text"
        id="review-text"
        placeholder="Review text"
      />
      <div className="add-review__submit">
        <button className="add-review__btn" type="submit">
          Post
        </button>
      </div>
    </div>
  );
}
