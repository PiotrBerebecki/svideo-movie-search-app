import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setSearchTerm } from './flux/actions';

function Header(props) {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input
        type="text"
        value={props.searchTerm}
        onChange={props.handleSearchTermChange}
        placeholder="Search"
      />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">
          Back
        </Link>
      </h2>
    );
  }

  return (
    <header>
      <h1><Link to="/">svideo</Link></h1>
      {utilSpace}
    </header>
  );
}

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchTermChange(e) {
      dispatch(setSearchTerm(e.target.value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
