import React from 'react';
import { ButtonContainer, Container, TimerContainer } from './styled';
import { Button, SmallButton } from '../../../styles/GlobalStyles';

export default function Timer() {
  return (
    <Container>
      <TimerContainer>45:00</TimerContainer>
      <ButtonContainer>
        <Button>Iniciar</Button>
      </ButtonContainer>
    </Container>
  );
}
