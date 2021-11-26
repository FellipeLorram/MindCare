import React, { useContext, useEffect } from 'react';
import Main from '../../components/Main/MainConsulta';
import { GlobalContext } from '../../contexts/App/index';
import Header from '../../components/AbstractHeader/Header';
import ConsultaContainer from '../../components/Consulta/ConsulaContainer';

export default function Consulta() {
  const bodyContext = useContext(GlobalContext);

  useEffect(() => {
    bodyContext.setBodyBlock(false);
  }, []);
  return (
    <Main>
      <Header />
      <ConsultaContainer />
    </Main>
  );
}
