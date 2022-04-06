import React from 'react';
import './Card.styles.scss';
import PropTypes from 'prop-types';

function Card({ children }) {
  return <div className="container">{children}</div>;
}

Card.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Card;
