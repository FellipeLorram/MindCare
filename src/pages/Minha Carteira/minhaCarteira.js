import React, { useContext, useEffect } from 'react';
import Main from '../../components/Main/Main';
import { GlobalContext } from '../../contexts/App/index';
import CardContainer from '../../components/Minha Carteira/Container';

export default function MinhaCarteira() {
  const bodyContext = useContext(GlobalContext);

  useEffect(() => {
    bodyContext.setBodyBlock(false);
  }, []);
  return (
    <Main topReference={window.innerWidth > 768 ? 'Minha Carteira' : 'Carteira'}>
      <CardContainer />
    </Main>
  );
}
