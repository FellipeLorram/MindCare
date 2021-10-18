import React, { useState } from 'react';
import {
  Day,
  DayHeader,
  DayContent,
} from './styled';
import ModalDailyInfo from '../../Meus Horarios/ModalDailyInfo';

export default function WeekDay({
  day,
  PatientPercent,
  DaytWeight,
  DayHours,
  DayEarns,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleClickDay = () => {
    setShowModal(true);
  };

  const handleFormatDay = (currentDay) => {
    if (day === 'Sabádo') return day;
    return `${day}-feira`;
  };

  return (
    <>
      <ModalDailyInfo
        day={handleFormatDay(day)}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <Day
        onClick={handleClickDay}
      >
        <DayHeader>{day}</DayHeader>
        <DayContent>
          <span>Pacientes</span>
          <span>{PatientPercent}</span>
        </DayContent>
        <DayContent>
          <span>Porcentagem nos ganhos</span>
          <span>
            {DaytWeight}
            %
          </span>
        </DayContent>
        <DayContent>
          <span>Horas</span>
          <span>
            {DayHours}
            Hrs
          </span>
        </DayContent>
        <DayContent>
          <span>Ganhos</span>
          <span>
            R$
            {DayEarns}
          </span>
        </DayContent>
      </Day>
    </>
  );
}
