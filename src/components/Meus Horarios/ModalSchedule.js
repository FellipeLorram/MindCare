import React from 'react';
import { ModalBodyHorarios, ModalBodyHorariosContent } from './styled';

export default function ModalSchedule({ content }) {
  const HandleFrequencyColor = (frequency) => {
    if (Number(frequency > 70)) return '#73ba2c';
    if (Number(frequency > 50)) return '#ffff00';
    return 'var(--red-color)';
  };

  return (
    <ModalBodyHorarios>
      <ModalBodyHorariosContent>
        <span className="material-icons-outlined hour">schedule</span>
        <span className="patient" />
        <span className="frequency">Frequência</span>
      </ModalBodyHorariosContent>

      {
        content.horarios.map(patients => (
          <ModalBodyHorariosContent
            color={HandleFrequencyColor(patients[2])}
            key={patients[0]}
          >
            <span className="hour">{patients[0]}</span>
            <span className="patient">{patients[1]}</span>
            <span className="frequency">
              {patients[2]}
              {patients[2] && '%'}
            </span>
          </ModalBodyHorariosContent>

        ))
      }
    </ModalBodyHorarios>
  );
}
