import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from './reviews';
import { restaurants } from '../../fixtures';

const review = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={review} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });
});
