import React, { useContext, useEffect } from 'react';
import Header from '../../components/AbstractHeader/Header';
import MainNovoPaciente from '../../components/Main/MainNovoPaciente';
import SeeMoreContainer from '../../components/SeeMore/Container';
import { GlobalContext } from '../../contexts/App/index';

export default function SeeMorePatient() {
  const bodyContext = useContext(GlobalContext);

  useEffect(() => {
    bodyContext.setBodyBlock(false);
  }, []);
  return (
    <MainNovoPaciente>
      <Header />
      <SeeMoreContainer />
    </MainNovoPaciente>
  );
}
