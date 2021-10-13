import React, { useState } from 'react';
import NavBar from '../NavBar/index';
import { MainContainer } from '../../styles/GlobalStyles';

export default function MainNovoPaciente(props) {
  const [menuActive, setmenuActive] = useState(true);

  return (
    <>
      <NavBar topReference={props.topReference} isActiveNav={menuActive} />
      <MainContainer isActiveMain={menuActive}>
        {props.children}

      </MainContainer>
    </>
  );
}
