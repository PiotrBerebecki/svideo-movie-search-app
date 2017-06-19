import React from 'react';
import { shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import store from './../flux/store';
import preload from './../../data.json';
import { Search } from './../Search';
import { setSearchTerm } from './../flux/actions';

describe('Search', () => {
  it('renders correctly', () => {
    const component = shallow(<Search shows={preload.shows} />);
    expect(component).toMatchSnapshot();
  });

  it('renders correct amount of shows', () => {
    const component = shallow(<Search shows={preload.shows} searchTerm="" />);
    const showCards = component.find('ShowCard');
    expect(showCards.length).toBe(preload.shows.length);
  });

  it('renders correct amount of shows based on search term – without Redux', () => {
    const searchTerm = 'black';
    const component = shallow(
      <Search shows={preload.shows} searchTerm={searchTerm} />
    );
    expect(component.find('ShowCard').length).toEqual(2);
  });

  it('renders correct amount of shows based on search term – with Redux', () => {
    const searchTerm = 'black';
    store.dispatch(setSearchTerm(searchTerm));
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Search shows={preload.shows} searchTerm={searchTerm} />
        </MemoryRouter>
      </Provider>
    );
    expect(component.find('.show-card').length).toEqual(2);
  });
});
