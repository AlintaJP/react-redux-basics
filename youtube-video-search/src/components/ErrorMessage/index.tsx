import React from 'react';
import { Message, Card } from './ErrorMessage.styles';

type Props = {
  message: string;
};

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <Card>
      <Message>{message}</Message>
    </Card>
  );
};

export default ErrorMessage;
