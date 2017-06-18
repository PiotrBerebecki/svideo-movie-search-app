import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { setSearchTerm } from './flux/actions';

function Landing(props) {
  const goToSearch = e => {
    e.preventDefault();
    if (props.searchTerm === '') {
      return;
    }
    props.history.push('/search');
  };

  return (
    <div className="landing">
      <h1>svideo</h1>
      <form onSubmit={goToSearch}>
        <input
          type="text"
          placeholder="Search"
          value={props.searchTerm}
          onChange={props.handleSearchTermChange}
        />
      </form>
      <Link to="/search">or Browse all</Link>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
