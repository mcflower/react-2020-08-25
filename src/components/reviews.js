import React from 'react';

export default function Reviews(props) {
  return (
    <div>
      <hr />
      <h2>Отзывы</h2>
      {props.reviews.map((review) => (
        <div>
          <p>
            <b>{review.user}</b>
          </p>
          <p>
            <em>{review.text}</em>
          </p>
          <p>Рейтинг: {review.rating}</p>
          <br />
        </div>
      ))}
    </div>
  );
}
