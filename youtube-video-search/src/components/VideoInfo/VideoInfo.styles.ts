import styled from 'styled-components';
// Types
type Props = {
  backdrop: string;
};

export const Wrapper = styled.div<Props>`
  background: ${({ backdrop }) => (backdrop ? `url(${backdrop})` : 'rgba(0, 0, 0, 0.5)')};
  background-size: cover;
  background-position: center;
  height: 600px;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .sub-info {
    display: flex;
    justify-content: flex-start;
  }

  .views {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .likes {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  .channel {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  .published-at {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  h1 {
    @media screen and (max-width: 786px) {
      font-size: var(--fontBig);
    }
  }
`;
