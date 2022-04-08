import React from 'react';
import PropTypes from 'prop-types';
import Container from './progress-bar.styles';

function ProgressBar({
  value, max, color, width,
}) {
  return (
    <Container color={color} width={width}>
      <progress value={value} max={max} />
      <span>
        {(value / max) * 100}
        %
      </span>
    </Container>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
};

ProgressBar.defaultProps = {
  max: 100,
  color: '#FE5D5D',
  width: '250px',
};

export default ProgressBar;
