import React from 'react';
import { CardContainer, CardContainerHeader, InfoTable } from './styled';

export default function FinancialMonthWeekCard({ GeneralFinancialInfos }) {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.1,
        type: 'spring',
        stiffness: 120,
      }}
    >
      <CardContainerHeader>
        Meus Ganhos
        <span className="material-icons">
          account_balance
        </span>
      </CardContainerHeader>

      <InfoTable>
        <thead>
          <tr>
            <td />
            <td>Semana</td>
            <td>Mês</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Horas</td>
            <td>
              {GeneralFinancialInfos.WeekQuantity.hours}
              hr
            </td>
            <td>
              {GeneralFinancialInfos.MonthsQuantity.hours}
              hr
            </td>
          </tr>
          <tr>
            <td>Ganhos</td>
            <td>{GeneralFinancialInfos.WeekQuantity.earns}</td>
            <td>{GeneralFinancialInfos.MonthsQuantity.earns}</td>
          </tr>
        </tbody>

      </InfoTable>
    </CardContainer>
  );
}
