import React from 'react';
import { ContainerPayments, ContainerPaymentsContent } from './styled';

const boxVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export default function PaymentsContainer({ patients }) {
  return (
    <ContainerPayments
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.1,
        type: 'spring',
        stiffness: 120,
      }}
    >
      <PaymentsContent
        header
        name="Nome"
        paymentDay="Vencimento"
        paymentModality="Modalidade"
        situation="Situação"
        paymentValue="Valor"
      />
      {patients.map(patient => (
        <PaymentsContent
          name={patient.name}
          paymentDay={patient.paymentDay}
          paymentModality={patient.paymentModality}
          situation={patient.situation}
          paymentValue={patient.paymentValue}
        />
      ))}
    </ContainerPayments>
  );
}

function PaymentsContent({
  header,
  name,
  paymentModality,
  situation,
  paymentDay,
  paymentValue,
}) {
  return (
    <ContainerPaymentsContent header={header} late={situation === 'Atrasado'}>
      <span className="name">{name}</span>
      <span>{paymentModality}</span>
      <span className="situation">{situation}</span>
      <span>{paymentDay}</span>
      <span className="financial--text">
        {!header && 'R$'}
        {paymentValue}
      </span>
    </ContainerPaymentsContent>
  );
}
