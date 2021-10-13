import React, { useState } from 'react';
import NavBar from '../NavBar/index';
import { MainContainer } from '../../styles/GlobalStyles';
import TopBar from '../TopBar/index';

export default function Main(props) {
  const [menuActive, setmenuActive] = useState(true);

  return (
    <>
      <NavBar topReference={props.topReference} isActiveNav={menuActive} />
      <MainContainer isActiveMain={menuActive}>
        <TopBar
          topReference={props.topReference}
          setmenuActive={() => setmenuActive(!menuActive)}
        />
        {props.children}

      </MainContainer>
    </>
  );
}
