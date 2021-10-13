import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AccordionBody,
  AccordionBodyContent,
  AccordionContainer,
  AccordionHeader,
  AccordionHeaderCenterLeft,
  AccordionHeaderCenterRight,
  AccordionHeaderLeftSide,
  AccordionHeaderRight,
  BoxPersonalInfos,
  ButtonContainerAccordionBody,
  ConsultationMode,
  InfoContainer,
  InfoHeader,
} from './styled';

export default function Accordion({
  img,
  patientName,
  Mode,
  Day,
  Hour,
  patienteSituation,
  SituationTxt,
  age,
  phone,
  email,
  Appoitments,
  Notes,
  Absences,
  PaymentMode,
  Situation,
  Value,
  delayTime,
}) {
  const [accordionActive, setAccordionActive] = useState(false);

  return (
    <AccordionContainer
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delayTime,
        duration: 0.1,
        stiffness: 120,
        damping: 8,
        mass: 0.4,
      }}
    >
      <AccordionHeader onClick={() => setAccordionActive(!accordionActive)}>
        <AccordionHeaderLeftSide>
          <div className="paciente_img">{img}</div>
          <div>{patientName}</div>
        </AccordionHeaderLeftSide>
        <ConsultationMode>{Mode}</ConsultationMode>
        <AccordionHeaderCenterLeft>
          <span>{Day}</span>
          <span>{Hour}</span>
        </AccordionHeaderCenterLeft>
        <AccordionHeaderCenterRight isActivePatient={patienteSituation}>
          <div className="ativo_inativo" />
          <span className="ativo_inativo_text">{SituationTxt}</span>
        </AccordionHeaderCenterRight>
        <AccordionHeaderRight IsAccordionActive={accordionActive}>
          <span className="material-icons">expand_more</span>
        </AccordionHeaderRight>
      </AccordionHeader>
      <AccordionBody IsAccordionActive={accordionActive}>
        <ButtonContainerAccordionBody>
          <button type="button">Iniciar consulta</button>
          <button type="button">Ver mais</button>
        </ButtonContainerAccordionBody>
        <AccordionBodyContent>
          <BoxPersonalInfos backGroundImage="linear-gradient(var(--white-color), var(--palette-color--third))" boxShadow="0 4px 5px var(--palette-color--third)">
            <InfoHeader color="#7d27a5">
              <span className="material-icons">face</span>
            </InfoHeader>
            <InfoContainer>
              <span>Idade</span>
              <span>{age}</span>
            </InfoContainer>
            <InfoContainer>
              <span>Telefone</span>
              <span>{phone}</span>
            </InfoContainer>
            <InfoContainer>
              <span>E-mail</span>
              <span>{email}</span>
            </InfoContainer>
          </BoxPersonalInfos>
          <BoxPersonalInfos backGroundImage="linear-gradient(var(--white-color), var(--palette-color--first))" boxShadow="0 4px 5px var(--palette-color--first)">
            <InfoHeader color="#a42885">
              <span className="material-icons">article</span>
            </InfoHeader>
            <InfoContainer>
              <span>Consultas</span>
              <span>{Appoitments}</span>
            </InfoContainer>
            <InfoContainer>
              <span>Notas</span>
              <span>{Notes}</span>
            </InfoContainer>
            <InfoContainer>
              <span>Faltas</span>
              <span>{Absences}</span>
            </InfoContainer>

          </BoxPersonalInfos>
          <BoxPersonalInfos backGroundImage="linear-gradient(var(--white-color),var(--palette-color--second))" boxShadow="0 4px 5px var(--palette-color--second)">
            <InfoHeader color="#66a527">
              <span className="material-icons">monetization_on</span>
            </InfoHeader>
            <InfoContainer>
              <span>Pagamento</span>
              <span>{PaymentMode}</span>
            </InfoContainer>
            <InfoContainer>
              <span>Valor</span>
              <span>
                R$
                {Value}
              </span>
            </InfoContainer>
            <InfoContainer>
              <span>Situação</span>
              <span>{Situation}</span>
            </InfoContainer>

          </BoxPersonalInfos>
        </AccordionBodyContent>
      </AccordionBody>
    </AccordionContainer>
  );
}
