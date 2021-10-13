import React from 'react';
import { BoxGrid } from './styled';
import CardBoxDay from './CardBoxDay';

export default function CardBoxDayGrid() {
  return (
    <BoxGrid>
      <CardBoxDay Day="Segunda-feira" delayDuration={0} />
      <CardBoxDay Day="Terça-feira" delayDuration={0.1} />
      <CardBoxDay Day="Quarta-feira" delayDuration={0.2} />
      <CardBoxDay Day="Quinta-feira" delayDuration={0.3} />
      <CardBoxDay Day="Sexta-feira" delayDuration={0.4} />
      <CardBoxDay Day="Sabádo" delayDuration={0.5} />
    </BoxGrid>
  );
}
