import React, { useContext, useEffect, useState } from 'react';
import Main from '../../components/Main/Main';
import CardContainer from '../../components/Central de Controle/Card Box Container/index';
import Card from '../../components/Central de Controle/Card/CardPatients';
import { Line } from '../../components/Central de Controle/Line/styled';
import RememberCard from '../../components/Central de Controle/Card/RememberCard';
import InfoCard from '../../components/Central de Controle/Card/PatientsInfoCard';
import FinancialInfoCard from '../../components/Central de Controle/Card/FinancialInfoCard';
import FinancialMonthWeekCard from '../../components/Central de Controle/Card/FinancialMonthWeekCard';
import WeekContainer from '../../components/Central de Controle/Card Box Container/WeekContainer';
import { GlobalContext } from '../../contexts/App/index';

const Data = {
  patients: [
    ['Fellipe Lorram Bezerra da Silva', '16:00'],
    ['Beatriz Mendonça', '18:00'],
    ['Rafael Bezerra da Silva', '21:00'],
    ['Nicolas Bezerra da Silva', '16:00'],
    ['Jhony Eliziario', '18:00'],
    ['Peterson Peixeira', '21:00'],
  ],
  Notes: [
    { content: 'Pesquisar sobre Lisa Feldman barret e emoções', criadoEm: Date.now() },
    { content: 'Falar com a bea sobre o pagamento de outubro', criadoEm: Date.now() },
    { content: 'Desmarcar Fellipe', criadoEm: Date.now() },
  ],

  GeneralPatientsInfos: {
    PatientsQuantity: 10,
    NotesQuantity: 28,
    ActivitiesQuantity: 18,
  },
  GeneralFinancialInfos: {
    ReceivedQuantity: 'R$500',
    ToReceivedQuantity: 'R$2000',
    LateQuantity: 'R$200',
    WeekQuantity: { hours: '40', earns: 'R$700' },
    MonthsQuantity: { hours: '120', earns: 'R$2100' },
  },
  WeekDayInfos: [
    {
      Day: 'Segunda',
      PatientPercent: '8',
      DaytWeight: '20',
      DayHours: '8',
      DayEarns: '450',
    },
    {
      Day: 'Terça',
      PatientPercent: '2',
      DaytWeight: '21',
      DayHours: '8',
      DayEarns: '450',
    },
    {
      Day: 'Quarta',
      PatientPercent: '8',
      DaytWeight: '20',
      DayHours: '8',
      DayEarns: '450',
    },
    {
      Day: 'Quinta',
      PatientPercent: '8',
      DaytWeight: '20',
      DayHours: '8',
      DayEarns: '450',
    },
    {
      Day: 'Sexta',
      PatientPercent: '1',
      DaytWeight: '5',
      DayHours: '1',
      DayEarns: '50',
    },
    {
      Day: 'Sabádo',
      PatientPercent: '0',
      DaytWeight: '0',
      DayHours: '0',
      DayEarns: '0',
    },
  ],
};

export default function CentralDeControle() {
  const bodyContext = useContext(GlobalContext);

  useEffect(() => {
    bodyContext.setBodyBlock(false);
  }, []);

  const [isExpanded, setIsExpanded] = useState([false, false, false, false]);
  const days = ['Hoje', 'Amanhã', 'Quinta', 'Sabádo'];
  let entryVelocity = 0;
  let count = 0;
  return (
    <Main topReference={window.innerWidth > 768 ? 'Central de controle' : 'Central'}>
      <CardContainer>
        {
          days.map(day => {
            entryVelocity += 0.1;
            count += 1;
            return (
              <Card
                key={count - 1}
                index={count - 1}
                HeaderText={day}
                animationDuration={entryVelocity - 0.1}
                isExpanded={isExpanded[count - 1]}
                patients={Data.patients}
                setIsExpanded={setIsExpanded}
              />
            );
          })
        }
      </CardContainer>
      <Line />
      <CardContainer>
        <RememberCard NotesData={Data.Notes} />
        <InfoCard GeneralPatientsInfos={Data.GeneralPatientsInfos} />
        <FinancialInfoCard GeneralFinancialInfos={Data.GeneralFinancialInfos} />
        <FinancialMonthWeekCard GeneralFinancialInfos={Data.GeneralFinancialInfos} />
      </CardContainer>
      <Line />
      <WeekContainer WeekDayInfos={Data.WeekDayInfos} />
    </Main>
  );
}
