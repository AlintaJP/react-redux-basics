import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  color: var(--white);
  font-size: 25px;

  a {
    color: var(--white);
    text-decoration: none;
  }

  .login {
    display: flex;
    align-items: center;

    a,
    span {
      margin-right: 10px;
    }
  }
`;

export const LogoImg = styled.img`
  width: 75px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;
