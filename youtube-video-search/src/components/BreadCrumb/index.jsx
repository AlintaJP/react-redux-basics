import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Styles
import { Wrapper, Content } from './BreadCrumb.styles';

function BreadCrumb({ videoTitle }) {
  return (
    <Wrapper>
      <Content>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{videoTitle}</span>
      </Content>
    </Wrapper>
  );
}

BreadCrumb.propTypes = {
  videoTitle: PropTypes.string.isRequired,
};

export default BreadCrumb;
