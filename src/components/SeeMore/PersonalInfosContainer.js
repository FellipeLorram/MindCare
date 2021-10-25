import React, { useEffect, useState } from 'react';
import {
  ContainerColumn,
  ContainerInput,
  ContainerRow,
} from './styled';
import InputContainerEdit from './InputEdit';
import ImgContainer from './ImgContainer';
import Footer from './ContainersFooter';
import More from './More';

const Data = {
  nome: 'Fellipe Lorram',
  idade: 21,
  endereco: 'Travessa josé pinheiro, Numero 5',
  telefone: '(21)98073-7371',
  sexo: 'Masculino',
  dataDeNascimento: '2000/06/02',
  naturalidade: 'Brasil',
  estadoCivil: 'Solteiro',
  CPF: '12345678910',
  RG: '213456554',
  email: 'email@email.com',
  cidade: 'RJ',
  estado: 'Rio de Janeiro',

  familiares: [
    ['Mãe', 'Maria'],
    ['Pai', 'Peterson'],
    ['Irmãos', 'Nicolas Rafael'],
    ['Esposa', 'Beatriz'],
  ],
  amigosEConhecidos: [
    ['Amigo', 'Deivisom'],
  ],
  outrasPessoas: [
    ['Léo'],
  ],
};

export function PersonalInfosContainer() {
  const [hide, setHide] = useState(true);
  const [disabled, setDisabled] = useState(true);

  return (
    <ContainerColumn
      gap="1rem"
      boxShadow
      hide={hide}
      color="var(--primary-color-shadow-opacity-H)"
    >
      <ContainerRow>
        <ImgContainer />
        <ContainerColumn>
          <ContainerInput>
            <InputContainerEdit value={Data.nome} disabled={disabled} inputName="Nome" inputType="text" />
            <InputContainerEdit value={Data.endereco} disabled={disabled} inputName="Endereço" inputType="text" />
          </ContainerInput>
          <ContainerInput>
            <InputContainerEdit value={Data.dataDeNascimento} disabled={disabled} inputName="Aniversário" inputType="date" />
            <InputContainerEdit value={Data.idade} disabled={disabled} inputName="Idade" inputType="number" />
            <InputContainerEdit value={Data.sexo} disabled={disabled} inputName="Sexo" inputType="text" />
            <InputContainerEdit value={Data.naturalidade} disabled={disabled} inputName="Naturalidade" inputType="text" />
          </ContainerInput>
        </ContainerColumn>
      </ContainerRow>
      <ContainerColumn hideMax={hide}>
        <ContainerInput>
          <InputContainerEdit value={Data.estadoCivil} disabled={disabled} inputName="Estado Civil" inputType="text" />
          <InputContainerEdit value={Data.CPF} disabled={disabled} inputName="CPF" inputType="text" />
          <InputContainerEdit value={Data.RG} disabled={disabled} inputName="RG" inputType="text" />
        </ContainerInput>
        <ContainerInput>
          <InputContainerEdit value={Data.email} disabled={disabled} inputName="E-mail" inputType="text" />
          <InputContainerEdit value={Data.telefone} disabled={disabled} inputName="Telefone" inputType="text" />
          <InputContainerEdit value={Data.cidade} disabled={disabled} inputName="Cidade" inputType="text" />
          <InputContainerEdit value={Data.estado} disabled={disabled} inputName="Estado" inputType="text" />
        </ContainerInput>
      </ContainerColumn>

      {disabled && (
        <More
          disabled={disabled}
          setDisabled={setDisabled}
          hide={hide}
          setHide={setHide}
        />
      )}
      {!disabled && (
        <Footer setDisabled={setDisabled} />
      )}
    </ContainerColumn>
  );
}
