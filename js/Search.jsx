import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import ShowCard from './ShowCard';
import { setSearchTerm } from './flux/actions';

function Search(props) {
  const regex = new RegExp(`${props.searchTerm}`, 'i');
  return (
    <div className="search">
      <Header showSearch />
      <div className="search__list">
        {props.shows
          .filter(show => regex.test(`${show.title}${show.description}`))
          .map(show => <ShowCard key={show.imdbID} {...show} />)}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm,
  };
};

export default connect(mapStateToProps)(Search);
