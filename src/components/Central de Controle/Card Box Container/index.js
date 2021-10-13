import React from 'react';
import { CardBoxContainer } from './styled';

export default function CardContainer(props) {
  return (
    <CardBoxContainer>
      {props.children}
    </CardBoxContainer>
  );
}
