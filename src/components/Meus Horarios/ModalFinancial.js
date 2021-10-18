import React from 'react';
import {
  ModalRelatoryBodyContent,
  ModalRelatoryFinancial,
  ModalRelatoryFinancialInfo,
  ModalRelatoryFinancialInfoBody,
  ModalRelatoryFinancialInfoHeader,
} from './styled';

export default function ModalFinancial({ late, nextPayments }) {
  return (
    <ModalRelatoryFinancial>
      <Info color="var(--red-color)" info={late} header="Atrasados" />
      <Info info={nextPayments} bdLft header="Próximos Pagamentos" />
    </ModalRelatoryFinancial>
  );
}

function Info({
  header,
  bdLft,
  info,
  color,
}) {
  return (
    <ModalRelatoryFinancialInfo bdLft={bdLft}>
      <ModalRelatoryFinancialInfoHeader
        color={color}
        bdLft={bdLft}
      >
        {header}
      </ModalRelatoryFinancialInfoHeader>
      <ModalRelatoryFinancialInfoBody>
        {info.map(content => (
          <ModalRelatoryBodyContent key={content[0]}>
            <span>{content[0]}</span>
            <span>{content[1]}</span>
          </ModalRelatoryBodyContent>
        ))}
      </ModalRelatoryFinancialInfoBody>

    </ModalRelatoryFinancialInfo>
  );
}
