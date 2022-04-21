import React from 'react';
import { Message, Card } from './ErrorMessage.styles';
import { ERROR_MESSAGE } from '../../constants/errorMessages';

type Props = {
  message?: string;
};

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <Card>
      <Message>{message || ERROR_MESSAGE}</Message>
    </Card>
  );
};

export default ErrorMessage;
