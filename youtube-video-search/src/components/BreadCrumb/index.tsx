import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { Wrapper, Content } from './BreadCrumb.styles';
// Types
type Props = {
  videoTitle: string;
};

const BreadCrumb: React.FC<Props> = ({ videoTitle }) => {
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
};

export default BreadCrumb;
