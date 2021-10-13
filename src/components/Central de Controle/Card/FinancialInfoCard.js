import React from 'react';
import {
  CardContainer,
  CardContainerHeader,
  CardContent,
  InfoText,
} from './styled';

export default function InfoCard({ GeneralFinancialInfos }) {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.1,
        type: 'spring',
        stiffness: 120,
      }}
    >
      <CardContainerHeader>
        Carteira
        <span className="material-icons burlywood">
          account_balance_wallet
        </span>
      </CardContainerHeader>
      <CardContent>
        <InfoText>
          <span className="material-icons info_icon">paid</span>
          <span>Recebido</span>
        </InfoText>
        <span className="info_number-financeiro">{GeneralFinancialInfos.ReceivedQuantity}</span>
      </CardContent>
      <CardContent>
        <InfoText>
          <span className="material-icons info_icon">price_change</span>
          <span>A Receber</span>
        </InfoText>
        <span className="info_number-financeiro">{GeneralFinancialInfos.ToReceivedQuantity}</span>
      </CardContent>
      <CardContent>
        <InfoText>
          <span className="material-icons info_icon">money_off_csred</span>
          <span>Atrasado</span>
        </InfoText>
        <span className="info_number-atrasado">{GeneralFinancialInfos.LateQuantity}</span>
      </CardContent>
    </CardContainer>
  );
}
