import React from 'react';
// Styles
import { Wrapper, List } from './Grid.styles';
// Types
type Props = {
  title: string;
  items: React.ReactElement[];
};

const Grid: React.FC<Props> = ({ title, items }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <List>
        {items.map((item, index) => (
          <li key={item.key ? item.key : index}>{item}</li>
        ))}
      </List>
    </Wrapper>
  );
};

export default Grid;
