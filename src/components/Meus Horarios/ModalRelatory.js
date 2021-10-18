import React from 'react';
import { ModalRelatoryBody, ModalRelatoryBodyContent } from './styled';

export default function ModalRelatory() {
  return (
    <ModalRelatoryBody>
      <Content />
    </ModalRelatoryBody>
  );
}

function Content({
  PatientPercent,
  DayHours,
  DaytWeight,
  DayEarns,
  DayFrequency,
  AvailableHours,
}) {
  return (
    <>
      <ModalRelatoryBodyContent>
        <span>Pacientes</span>
        <span>{PatientPercent}</span>
      </ModalRelatoryBodyContent>
      <ModalRelatoryBodyContent>
        <span>Horas Atendidas</span>
        <span>
          {DayHours}
          Hrs
        </span>
      </ModalRelatoryBodyContent>
      <ModalRelatoryBodyContent>
        <span>Frequência Geral</span>
        <span>
          {DayFrequency}
          %
        </span>
      </ModalRelatoryBodyContent>
      <ModalRelatoryBodyContent>
        <span>Horários Disponíveis</span>
        <span>{AvailableHours}</span>
      </ModalRelatoryBodyContent>
      <ModalRelatoryBodyContent>
        <span>Porcentagem nos ganhos</span>
        <span>
          {DaytWeight}
          %
        </span>
      </ModalRelatoryBodyContent>
      <ModalRelatoryBodyContent>
        <span>Ganhos</span>
        <span>
          R$
          {DayEarns}
        </span>
      </ModalRelatoryBodyContent>
    </>
  );
}
