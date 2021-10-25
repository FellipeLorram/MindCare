import React, { useEffect, useState } from 'react';
import {
  ContainerFooter,
} from './styled';
import { Button } from '../../styles/GlobalStyles';

export default function Footer({ setDisabled }) {
  return (
    <ContainerFooter>
      <Button>Salvar</Button>
      <Button onClick={() => setDisabled(true)}>Cancelar</Button>
    </ContainerFooter>
  );
}
