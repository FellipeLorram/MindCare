import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import {
  InputField,
  ModalityField,
  PaymentContainer,
  PaymentModalityContainer,
} from './styled';

export default function PaymentCost({ col }) {
  const [selectedMOdality, setSelectedMOdality] = useState([true, false]);
  const textsModality = ['Semanal', 'Mensal'];
  const [selectedDueDate, setSelectedDueDate] = useState([true, false, false, false, false, false]);
  const textsDueDate = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  let countModality = 0;
  let countDue = 0;
  return (
    <PaymentContainer col={col}>
      <label>
        Valor da consulta
        <InputField />
      </label>
      <PaymentModalityContainer>
        <div className="PaymentModalityContainer--header">Modalidade</div>
        <div className="PaymentModalityContainer--body">
          {textsModality.map(text => {
            countModality += 1;
            return (
              <FieldModality
                key={text}
                setSelected={setSelectedMOdality}
                index={countModality - 1}
                selected={selectedMOdality[countModality - 1]}
                text={text}
              />
            );
          })}
        </div>
        <div className="PaymentModalityContainer--header">Vencimento</div>
        <div className="PaymentModalityContainer--body--due">
          {
            selectedMOdality[0]
              ? textsDueDate.map(text => {
                countDue += 1;
                return (
                  <FieldDue
                    key={text}
                    setSelected={setSelectedDueDate}
                    index={countDue - 1}
                    selected={selectedDueDate[countDue - 1]}
                    text={text}
                  />
                );
              })
              : (
                <label>
                  Dia
                  <InputField />
                </label>
              )
          }
        </div>
      </PaymentModalityContainer>
    </PaymentContainer>
  );
}

function FieldModality({
  text,
  selected,
  setSelected,
  index,
}) {
  const handleClick = () => {
    setSelected(prevArr => {
      const newArr = prevArr.map(item => false);
      newArr[index] = true;
      return newArr;
    });
  };
  return (
    <ModalityField
      onClick={handleClick}
      selected={selected}
    >
      {text}
    </ModalityField>
  );
}

function FieldDue({
  text,
  selected,
  setSelected,
  index,
}) {
  const handleClick = () => {
    setSelected(prevArr => {
      const newArr = prevArr.map(item => false);
      newArr[index] = true;
      return newArr;
    });
  };
  return (
    <ModalityField
      onClick={handleClick}
      selected={selected}
    >
      {text}
    </ModalityField>
  );
}
