import React from 'react';
import { shallow } from 'enzyme';
import preload from './../../data.json';

import Search from './../Search';

describe('Search', () => {
  it('renders correctly', () => {
    const component = shallow(<Search shows={preload.shows} />);
    expect(component).toMatchSnapshot();
  });

  it('renders correct amount of shows', () => {
    const component = shallow(<Search shows={preload.shows} />);
    const showCards = component.find('ShowCard');
    expect(showCards.length).toBe(preload.shows.length);
  });

  it('renders correct amount of shows based on search term', () => {
    const component = shallow(<Search shows={preload.shows} />);
    const searchField = component.find('input');
    const searchTerm = 'black';
    searchField.simulate('change', { target: { value: searchTerm } });
    const showCards = component.find('ShowCard');

    expect(showCards.length).toBe(2);
  });
});
