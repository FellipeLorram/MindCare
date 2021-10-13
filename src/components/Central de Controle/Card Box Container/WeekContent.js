import React from 'react';
import {
  Day,
  DayHeader,
  DayContent,
} from './styled';

export default function WeekDay({
  day,
  PatientPercent,
  DaytWeight,
  DayHours,
  DayEarns,
}) {
  return (
    <Day>
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
  );
}
