import React, { useState } from 'react';
import { AppointmentDurationContainer, DurationField } from './styled';

export default function AppointmentDuration() {
  const [selected, setSelected] = useState([false, true, false, false, false, false, false, false]);
  const durations = ['35 minutos', '40 minutos', '45 minutos', '50 minutos', '55 minutos', '1 hora', '1:15 hora', '1:30 hora'];
  let count = 0;
  return (
    <AppointmentDurationContainer>
      <div className="AppointmentDurationContainer--header">Duração da consulta</div>
      <div className="AppointmentDurationContainer--body">
        {durations.map(text => {
          count += 1;
          return (
            <Field
              key={text}
              index={count - 1}
              selected={selected[count - 1]}
              setSelected={setSelected}
              text={text}
            />
          );
        })}
      </div>
    </AppointmentDurationContainer>
  );
}

function Field({
  text,
  selected,
  index,
  setSelected,
}) {
  const handleClick = () => {
    setSelected(prevArr => {
      const newArr = prevArr.map(item => false);
      newArr[index] = true;
      return newArr;
    });
  };
  return (
    <DurationField
      selected={selected}
      onClick={handleClick}
    >
      {text}
    </DurationField>
  );
}
