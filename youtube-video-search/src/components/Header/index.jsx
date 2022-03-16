import React from 'react';
import { Link } from 'react-router-dom';

import YoutubeLogo from '../../images/youtube-logo.svg';
import ReactLogo from '../../images/react-icon.svg';

import { Wrapper, Content, LogoImg } from './Header.styles';

function Header() {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={YoutubeLogo} alt="youtube-logo" />
        </Link>
        <span>Youtube Video Search</span>
        <LogoImg src={ReactLogo} alt="react-logo" />
      </Content>
    </Wrapper>
  );
}

export default Header;
