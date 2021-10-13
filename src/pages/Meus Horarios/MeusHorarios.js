import React from 'react';
import Main from '../../components/Main/Main';
import CardBoxDayGrid from '../../components/Meus Horarios/CardBoxDayGrid';

export default function MeusHorarios() {
  return (
    <Main topReference={window.innerWidth > 768 ? 'Meus horários' : 'Horários'}>
      <CardBoxDayGrid />
    </Main>
  );
}
