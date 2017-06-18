import React, { Component } from 'react';

import Header from './Header';
import ShowCard from './ShowCard';

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
        <Header
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
          showSearch
        />
        <div>
          {this.props.shows
            .filter(show => regex.test(`${show.title}${show.description}`))
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
