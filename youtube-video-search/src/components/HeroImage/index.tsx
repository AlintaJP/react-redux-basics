import React from 'react';
// Styles
import { Wrapper, Content, Text } from './HeroImage.styles';
// Types
type Props = {
  image: string;
  title: string;
  channel: string;
};

const HeroImage: React.FC<Props> = ({ image, title, channel }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h2>{channel}</h2>
          <p>{title}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default HeroImage;
