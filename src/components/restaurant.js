import React from 'react';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

export default function Restaurant(props) {
  return (
    <div>
      <Menu menu={props.restaurant.menu} />
      <Rate reviews={props.restaurant.reviews} />
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  );
}
