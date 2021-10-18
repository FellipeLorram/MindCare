import React, { useContext, useEffect } from 'react';
import Main from '../../components/Main/Main';
import HeaderDailyInfo from '../../components/Meus Horarios/HeaderDailyInfo';
import { GlobalContext } from '../../contexts/App/index';

export default function MeusHorariosDailyInfo() {
  const bodyContext = useContext(GlobalContext);

  useEffect(() => {
    bodyContext.setBodyBlock(false);
  }, []);
  return (
    <Main topReference={window.innerWidth > 768 ? 'Meus horários' : 'Horários'}>
      <HeaderDailyInfo />
    </Main>
  );
}
