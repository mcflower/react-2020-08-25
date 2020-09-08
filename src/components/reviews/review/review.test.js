import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { restaurants } from '../../../fixtures';
import Review from './review';

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(
      <Review user={review.user} text={review.text} rating={review.rating} />
    );
    expect(wrapper.find('[data-id="review-one"]').length).toBe(1);
  });
  it('should init with text', () => {
    const wrapper = mount(
      <Review
        user={review.user}
        rating={review.rating}
        text={review.text}
        key={review.id}
      />
    );
    expect(
      wrapper.find('[data-id="review-text"]').text().length
    ).toBeGreaterThan(0);
  });
});
