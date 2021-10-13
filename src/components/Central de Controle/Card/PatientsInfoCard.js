import React from 'react';
import {
  CardContainer,
  CardContainerHeader,
  CardContent,
  InfoText,
} from './styled';

export default function InfoCard({ GeneralPatientsInfos }) {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.1,
        type: 'spring',
        stiffness: 120,
      }}
    >
      <CardContainerHeader>
        Consultas
        <span className="material-icons brown">
          feed
        </span>
      </CardContainerHeader>
      <CardContent>
        <InfoText>
          <span className="material-icons info_icon">people_alt</span>
          <span>Pacientes</span>
        </InfoText>
        <span>{GeneralPatientsInfos.PatientsQuantity}</span>
      </CardContent>
      <CardContent>
        <InfoText>
          <span className="material-icons info_icon">speaker_notes</span>
          <span>Notas</span>
        </InfoText>
        <span>{GeneralPatientsInfos.NotesQuantity}</span>
      </CardContent>
      <CardContent>
        <InfoText>
          <span className="material-icons info_icon">extension</span>
          <span>Atividades</span>
        </InfoText>
        <span>{GeneralPatientsInfos.ActivitiesQuantity}</span>
      </CardContent>
    </CardContainer>
  );
}
