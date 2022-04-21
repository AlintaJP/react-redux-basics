import styled from 'styled-components';
// Types
type Props = {
  backdrop: string;
};

export const Wrapper = styled.article<Props>`
  background: ${({ backdrop }) => (backdrop ? `url(${backdrop})` : 'rgba(0, 0, 0, 0.5)')};
  background-size: cover;
  background-position: center;
  height: 600px;
  padding: 40px 20px;
  animation: animateVideoInfo 1s;

  @keyframes animateVideoInfo {
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

  dt {
    font-size: 1.1rem;
    font-weight: 600;
  }

  dd {
    font-size: 1rem;
    color: var(--white);
  }

  .sub-info {
    display: flex;
    justify-content: flex-start;
  }

  .views {
    dd {
      margin: 0;
    }
  }

  .likes {
    margin: 0 0 0 40px;

    dd {
      margin: 0;
    }
  }

  .channel {
    margin: 0 0 0 40px;

    dd {
      margin: 0;
    }
  }

  .published-at {
    margin: 0 0 0 40px;

    dd {
      margin: 0;
    }
  }

  h2 {
    @media screen and (max-width: 786px) {
      font-size: var(--fontBig);
    }
  }
`;
