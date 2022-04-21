import React from 'react';
// Styles
import { Wrapper } from './Button.styles';
// Types
type Props = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<Props> = ({ text, onClick }) => {
  return <Wrapper onClick={onClick}>{text}</Wrapper>;
};

export default Button;
