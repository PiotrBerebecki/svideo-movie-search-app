import React, { Component } from 'react';

import ShowCard from './ShowCard';
import preload from './../data.json';

class Search extends Component {
  state = {
    searchTerm: '',
  };

  handleSearchTermChange = e => {
    this.setState({
      searchTerm: e.target.value,
    });
  };
  render() {
    const regex = new RegExp(`${this.state.searchTerm}`, 'i');
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
            .filter(show => regex.test(`${show.title}${show.description}`))
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
