import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Styles
import { Image } from './Thumb.styles';

function Thumb({ image, videoId, clickable }) {
  return (
    <div>
      {clickable ? (
        <Link to={`/${videoId}`}>
          <Image src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" />
      )}
    </div>
  );
}

Thumb.propTypes = {
  image: PropTypes.string,
  videoId: PropTypes.string.isRequired,
  clickable: PropTypes.bool.isRequired,
};

export default Thumb;
