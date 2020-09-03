import React from 'react';

export default function Rate(props) {
  let middleRate = 0;
  props.reviews.map((star) => (middleRate += star.rating));
  return (
    <div>
      <p>Рейтинг: {middleRate / props.reviews.length}</p>
    </div>
  );
}
