import React, { useContext, useEffect } from 'react';
import Main from '../../components/Main/Main';
import CardBoxDayGrid from '../../components/Meus Horarios/CardBoxDayGrid';
import { GlobalContext } from '../../contexts/App/index';

export default function MeusHorarios() {
  const bodyContext = useContext(GlobalContext);

  useEffect(() => {
    bodyContext.setBodyBlock(false);
  }, []);
  return (
    <Main topReference={window.innerWidth > 768 ? 'Meus horários' : 'Horários'}>
      <CardBoxDayGrid />
    </Main>
  );
}
