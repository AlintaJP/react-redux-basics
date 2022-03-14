import React from 'react';
import './Button.styles.scss';
import PropTypes from 'prop-types';

function Button({ children, onClick }) {
  return (
    <button type="button" className="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
