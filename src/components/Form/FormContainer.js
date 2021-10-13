import React, { useState } from 'react';
import AvailableHours from './AvailableHours';
import InfoContainer from './InfoContainer';
import InputContainer from './InputContainer';
import SelectContainer from './SelectContainer';

import { ContainerForm, FormInputContainer } from './styled';
import TextAreaContainer from './TexteAreaContainer';
import ModalAddFields from './ModalAddFields';
import AppointmentDuration from './AppoitmentDuration';
import PaymentCost from './PaymentCost';

export default function FormContainer() {
  const [showModal, setShowModal] = useState(false);
  const [addFields, setAddFields] = useState([]);

  return (
    <>
      <ModalAddFields
        showModal={showModal}
        setShowModal={setShowModal}
        setAddFields={setAddFields}
      />
      <ContainerForm>
        <InfoContainer
          setAddFields={setAddFields}
          setShowModal={setShowModal}
          footer
          bgColor="var(--primary-color-shadow-opacity-H)"
          TopReference="Informações Pessoais"
          TopIcon="face"
        >
          <FormInputContainer>
            <InputContainer inputName="Nome" inputType="text" />
            <InputContainer inputName="Endereço" inputType="text" />
          </FormInputContainer>
          <FormInputContainer>
            <InputContainer inputName="Idade" inputType="number" />
            <InputContainer inputName="Data de Nascimento" inputType="date" />
            <SelectContainer selectName="Sexo">
              <option>Masculino</option>
              <option>Feminino</option>
            </SelectContainer>
            <InputContainer inputName="Naturalidade" inputType="text" />
          </FormInputContainer>
          <FormInputContainer>
            <SelectContainer selectName="Estado Civil">
              <option>Casado</option>
              <option>Solteiro</option>
              <option>Divorciado</option>
              <option>Viúvo</option>
              <option>Separado</option>
            </SelectContainer>
            <InputContainer inputName="CPF" inputType="text" />
            <InputContainer inputName="RG" inputType="text" />
          </FormInputContainer>
          <FormInputContainer>
            <InputContainer inputName="E-mail" inputType="text" />
            <InputContainer inputName="Telefone" inputType="text" />
            <InputContainer inputName="Cidade" inputType="text" />
            <InputContainer inputName="Estado" inputType="text" />
          </FormInputContainer>
          <FormInputContainer>
            <TextAreaContainer inputName="Observações" inputRows="3" />
          </FormInputContainer>
          {addFields.map(field => (
            <FormInputContainer key={field}>
              <TextAreaContainer inputName={field} inputRows="3" />
            </FormInputContainer>
          ))}
        </InfoContainer>
        <InfoContainer bgColor="var(--palette-color--first--opacity)" TopReference="Consultas" TopIcon="article">
          <AvailableHours />
          <AppointmentDuration />
        </InfoContainer>
        <InfoContainer bgColor="var(--palette-color--second--opacity)" TopReference="Pagamentos" TopIcon="monetization_on">
          <PaymentCost />
        </InfoContainer>
        <div className="ContainerForm--footer">
          <button
            type="button"
          >
            Finalizar
          </button>
        </div>
      </ContainerForm>
    </>
  );
}
