import React, { useState } from 'react';
import {
  InputField,
  ModalityField,
  PaymentContainer,
  PaymentModalityContainer,
} from './styled';

export default function PaymentCost() {
  const [selected, setSelected] = useState([true, false]);
  const texts = ['Semanal', 'Mensal'];
  let count = 0;
  return (
    <PaymentContainer>
      <label>
        Valor da consulta
        <InputField />
      </label>
      <PaymentModalityContainer>
        <div className="PaymentModalityContainer--header">Modalidade</div>
        <div className="PaymentModalityContainer--body">
          {texts.map(text => {
            count += 1;
            return (
              <Field
                key={text}
                setSelected={setSelected}
                index={count - 1}
                selected={selected[count - 1]}
                text={text}
              />
            );
          })}
        </div>
      </PaymentModalityContainer>
    </PaymentContainer>
  );
}

function Field({
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
