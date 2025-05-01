import React, { JSX } from 'react';

export function RatingStars(): JSX.Element {
  return (
    <div className="rating__stars">
      {[...Array(10)].map((_, index) => {
        const value = 10 - index;
        return (
          <React.Fragment key={value}>
            <input
              className="rating__input"
              id={`star-${value}`}
              type="radio"
              name="rating"
              value={value}
              defaultChecked={value === 8}
            />
            <label className="rating__label" htmlFor={`star-${value}`}>
              Rating {value}
            </label>
          </React.Fragment>
        );
      })}
    </div>
  );
}
