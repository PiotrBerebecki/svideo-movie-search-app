import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  width: 95%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
  transition: all 0.3s;
  &:hover {
    background-color: rgba(255,255,255,0.25);
  }

  @media (min-width: 61em) {
    width: 45%;
  }

  @media (min-width: 87.5em) {
    width: 30%;
  }
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

function ShowCard({ title, poster, description, year, imdbID }) {
  return (
    <Wrapper to={`/details/${imdbID}`}>
      <Image src={`/public/img/posters/${poster}`} alt={`${title} poster`} />
      <div>
        <h3>{title}</h3>
        <h4>({year})</h4>
        <p>{description}</p>
      </div>
    </Wrapper>
  );
}

ShowCard.propTypes = {
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired,
  poster: string.isRequired,
};

export default ShowCard;
