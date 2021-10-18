import React from 'react';
import { BoxGrid } from './styled';
import EarnsContainer from './Earns';
import PaymentsContainer from './Payments';

const Data = {
  earns: {
    montlyEarn: '1380',
    weeklyEarn: '230',
  },
  patients: [
    {
      name: 'Fellipe Lorram',
      paymentModality: 'Mensal',
      situation: 'Atrasado',
      paymentDay: '10/10',
      paymentValue: '80',
    },
    {
      name: 'Fellipe Lorram',
      paymentModality: 'Mensal',
      situation: 'Atrasado',
      paymentDay: '10/10',
      paymentValue: '80',
    },
    {
      name: 'Fellipe Lorram',
      paymentModality: 'Mensal',
      situation: 'Atrasado',
      paymentDay: '10/10',
      paymentValue: '80',
    },
    {
      name: 'Fellipe Lorram',
      paymentModality: 'Mensal',
      situation: 'Atrasado',
      paymentDay: '10/10',
      paymentValue: '80',
    },
    {
      name: 'Fellipe Lorram',
      paymentModality: 'Mensal',
      situation: 'Atrasado',
      paymentDay: '10/10',
      paymentValue: '80',
    },
    {
      name: 'Fellipe Lorram',
      paymentModality: 'Mensal',
      situation: 'Atrasado',
      paymentDay: '10/10',
      paymentValue: '80',
    },
    {
      name: 'Nicolas Bezerra',
      paymentModality: 'Mensal',
      situation: 'Atrasado',
      paymentDay: '10/10',
      paymentValue: '80',
    },
    {
      name: 'Rafael Bezerra',
      paymentModality: 'Semanal',
      situation: 'Atrasado',
      paymentDay: 'Segunda',
      paymentValue: '80',
    },
  ],
  lates: ['Fellipe Lorram', 'Nicolas Bezerra', 'Rafael Bezerra'],
};

export default function CardContainer() {
  return (
    <BoxGrid>
      <PaymentsContainer patients={Data.patients} />
      <EarnsContainer montlyEarn={Data.earns.montlyEarn} weeklyEarn={Data.earns.weeklyEarn} />
    </BoxGrid>
  );
}
