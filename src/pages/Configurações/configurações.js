import React, { useContext, useEffect } from 'react';
import Main from '../../components/Main/Main';
import { GlobalContext } from '../../contexts/App/index';
import ContainerConfigs from '../../components/Configurações';

export default function Configurações() {
  const bodyContext = useContext(GlobalContext);

  useEffect(() => {
    bodyContext.setBodyBlock(false);
  }, []);
  return (
    <Main topReference="Configurações">
      <ContainerConfigs />
    </Main>
  );
}
