import React, { useEffect, useState } from 'react';
import ModalEditAppoitmentsDay from './Modals/ModalEditAppoitmentsDay';
import {
  ContainerColumn,
  ContainerRow,
  EditContainer,
  PaymentsAndAppoitmentsContainerContent,
  PaymentsAndAppoitmentsContainerHeader,
} from './styled';

export function AppoitmentsAndPaymentsContainer({ setShowModalPayments, setShowModalAppoiments }) {
  return (
    <ContainerRow>
      <Appoitments setShowModal={setShowModalAppoiments} appointmentDay="Segunda-feira" appointmentHour="16:00" appointmentFrequency="82.4" appointmentFouls="4" />
      <Payments setShowModal={setShowModalPayments} paymentDay="02/10" paymentValue="80" paymentSituation="Atrasado" paymentModality="Semanal" />
    </ContainerRow>
  );
}

function Payments({
  paymentDay,
  paymentValue,
  paymentSituation,
  paymentModality,
  setShowModal,
}) {
  return (
    <>
      <ContainerColumn
        boxShadow
        gap="1rem"
        color="var(--primary-color-shadow-opacity-H)"
      >
        <PaymentsAndAppoitmentsContainerHeader>Financeiro</PaymentsAndAppoitmentsContainerHeader>
        <PaymentsAndAppoitmentsContainerContent>
          <span>Vencimento</span>
          <span>{paymentDay}</span>
        </PaymentsAndAppoitmentsContainerContent>
        <PaymentsAndAppoitmentsContainerContent>
          <span>Valor</span>
          <span>
            R$
            {paymentValue}
          </span>
        </PaymentsAndAppoitmentsContainerContent>
        <PaymentsAndAppoitmentsContainerContent>
          <span>Situação</span>
          <span>{paymentSituation}</span>
        </PaymentsAndAppoitmentsContainerContent>
        <PaymentsAndAppoitmentsContainerContent>
          <span>Modalidade</span>
          <span>{paymentModality}</span>
        </PaymentsAndAppoitmentsContainerContent>
        <Edit setShowModal={setShowModal} />
      </ContainerColumn>
    </>
  );
}

function Appoitments({
  appointmentDay,
  appointmentHour,
  appointmentFrequency,
  appointmentFouls,
  setShowModal,
}) {
  return (
    <>
      <ContainerColumn
        boxShadow
        gap="1rem"
        color="var(--primary-color-shadow-opacity-H)"
      >
        <PaymentsAndAppoitmentsContainerHeader>Consultas</PaymentsAndAppoitmentsContainerHeader>
        <PaymentsAndAppoitmentsContainerContent>
          <span>Dia</span>
          <span>{appointmentDay}</span>
        </PaymentsAndAppoitmentsContainerContent>
        <PaymentsAndAppoitmentsContainerContent>
          <span>Horário</span>
          <span>{appointmentHour}</span>
        </PaymentsAndAppoitmentsContainerContent>
        <PaymentsAndAppoitmentsContainerContent>
          <span>Frequência</span>
          <span>
            %
            {appointmentFrequency}
          </span>
        </PaymentsAndAppoitmentsContainerContent>
        <PaymentsAndAppoitmentsContainerContent>
          <span>Faltas</span>
          <span>{appointmentFouls}</span>
        </PaymentsAndAppoitmentsContainerContent>
        <Edit setShowModal={setShowModal} />
      </ContainerColumn>
    </>
  );
}

function Edit({ setShowModal }) {
  return (
    <EditContainer>
      <span
        role="button"
        tabIndex={0}
        onKeyUp={() => setShowModal(true)}
        onClick={() => setShowModal(true)}
        className="material-icons-outlined edit"
      >
        edit
      </span>
    </EditContainer>
  );
}
