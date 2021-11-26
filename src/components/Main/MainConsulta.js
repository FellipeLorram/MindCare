import React, { useState } from 'react';
import { MainContainer } from '../../styles/GlobalStyles';

export default function MainConsulta(props) {
  return (
    <>
      <MainContainer
        isActiveMain={false}
      >
        {props.children}

      </MainContainer>
    </>
  );
}
