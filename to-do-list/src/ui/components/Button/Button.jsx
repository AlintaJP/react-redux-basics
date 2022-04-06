import React from 'react';
import './Button.styles.scss';
import PropTypes from 'prop-types';

function Button({
  children, onClick, submit, classes = '',
}) {
  return (
    <button type={submit ? 'submit' : 'button'} className={`button ${classes}`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  submit: PropTypes.bool,
  classes: PropTypes.string,
};

export default Button;
