import React from 'react';
import Header from '../../components/AbstractHeader/Header';
import FormContainer from '../../components/Form/FormContainer';
import MainNovoPaciente from '../../components/Main/MainNovoPaciente';

export default function novoPaciente() {
  return (
    <MainNovoPaciente>
      <Header />
      <FormContainer />

    </MainNovoPaciente>
  );
}
