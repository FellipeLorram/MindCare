import React from 'react';
import Main from '../../components/Main/Main';
import Accordion from '../../components/Pacientes/Accordion/AccordionPatient';

export default function Pacientes() {
  const DataPatients = [
    {
      id: 1,
      name: 'Fellipe Lorram',
      age: 21,
      phone: '(21)980737371',
      email: 'email@email.com',
      img: 'img',
      Mode: 'Presencial',
      Day: 'Terça',
      Hour: '18:00',
      patienteSituation: true,
      SituationTxt: 'Ativo',
      Appoitments: 21,
      Notes: 12,
      Absences: 7,
      PaymentMode: 'Semanal',
      Value: 80,
      Situation: 'Em dia',
    },
    {
      id: 2,
      name: 'Beatriz Mendonça',
      age: 22,
      phone: '(21)980737371',
      email: 'email@email.com',
      img: 'img',
      Mode: 'Presencial',
      Day: 'Quarta',
      Hour: '18:00',
      patienteSituation: false,
      SituationTxt: 'Inativo',
      Appoitments: 21,
      Notes: 12,
      Absences: 7,
      PaymentMode: 'Mensal',
      Value: 50,
      Situation: 'Inativo',
    },
    {
      id: 3,
      name: 'Nicolas Bezerra',
      age: 18,
      phone: '(21)980737371',
      email: 'email@email.com',
      img: 'img',
      Mode: 'Presencial',
      Day: 'Segunda',
      Hour: '10:00',
      patienteSituation: true,
      SituationTxt: 'Ativo',
      Appoitments: 21,
      Notes: 12,
      Absences: 7,
      PaymentMode: 'Mensal',
      Value: 60,
      Situation: 'Em dia',
    },
    {
      id: 4,
      name: 'Rafael Bezerra',
      age: 16,
      phone: '(21)980737371',
      email: 'email@email.com',
      img: 'img',
      Mode: 'Presencial',
      Day: 'Sexta',
      Hour: '13:00',
      patienteSituation: true,
      SituationTxt: 'Ativo',
      Appoitments: 21,
      Notes: 12,
      Absences: 7,
      PaymentMode: 'Mensal',
      Value: 50,
      Situation: 'Atrasado',
    },
  ];

  let delayTime = 0;

  return (
    <Main topReference="Pacientes">
      {DataPatients.map(Patient => {
        delayTime += 0.1;
        return (
          <Accordion
            key={Patient.id}
            img={Patient.img}
            patientName={Patient.name}
            Mode={Patient.Mode}
            Day={Patient.Day}
            Hour={Patient.Hour}
            patienteSituation={Patient.patienteSituation}
            SituationTxt={Patient.SituationTxt}
            phone={Patient.phone}
            email={Patient.email}
            age={Patient.age}
            Appoitments={Patient.Appoitments}
            Notes={Patient.Notes}
            Absences={Patient.Absences}
            PaymentMode={Patient.PaymentMode}
            Value={Patient.Value}
            Situation={Patient.Situation}
            delayTime={delayTime - 0.1}
          />
        );
      })}
      <div className="bottom-space" />
    </Main>
  );
}
