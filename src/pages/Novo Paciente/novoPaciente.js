import React, { useContext, useEffect } from 'react';
import Header from '../../components/AbstractHeader/Header';
import FormContainer from '../../components/Form/FormContainer';
import MainNovoPaciente from '../../components/Main/MainNovoPaciente';
import { GlobalContext } from '../../contexts/App/index';

export default function novoPaciente() {
  const bodyContext = useContext(GlobalContext);

  useEffect(() => {
    bodyContext.setBodyBlock(false);
  }, []);
  return (
    <MainNovoPaciente>
      <Header text="Novo Paciente" />
      <FormContainer />

    </MainNovoPaciente>
  );
}
