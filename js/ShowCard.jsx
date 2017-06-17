import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${/* width: 32%; */ ''}
  width: 90%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

function ShowCard({ title, poster, description, year }) {
  return (
    <Wrapper>
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
