import React from 'react';
import './Button.styles.scss';
import PropTypes from 'prop-types';

function Button({ children, onClick, submit, ...props }) {
  return (
    <button type={submit ? 'submit' : 'button'} className="button" onClick={onClick} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  submit: PropTypes.bool,
};

export default Button;
