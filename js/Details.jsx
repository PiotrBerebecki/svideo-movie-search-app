import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Spinner from './Spinner';
import getApiDetails from './flux/asyncActions';

class Details extends Component {
  componentDidMount() {
    if (!this.props.rating) {
      this.props.getApiDetails();
    }
  }

  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    const { rating } = this.props;

    let ratingComponent;
    if (rating) {
      ratingComponent = <h3>{rating}</h3>;
    } else {
      ratingComponent = <Spinner />;
    }

    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}
          <img
            src={`/public/img/posters/${poster}`}
            alt={`Poster for ${title}`}
          />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID]
    ? state.apiData[ownProps.show.imdbID]
    : {};
  return {
    rating: apiData.rating,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getApiDetails() {
      dispatch(getApiDetails(ownProps.show.imdbID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
