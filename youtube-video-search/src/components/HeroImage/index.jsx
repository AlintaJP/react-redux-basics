import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { Wrapper, Content, Text } from './HeroImage.styles';

function HeroImage({ image, title, channel }) {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{channel}</h1>
          <p>{title}</p>
        </Text>
      </Content>
    </Wrapper>
  );
}

HeroImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  channel: PropTypes.string,
};

export default HeroImage;
