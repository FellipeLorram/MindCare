import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Header, Toggle, TopIcon,
  TopReference,
} from './styled';

export default function TopBar({ topReference, setmenuActive }) {
  return (
    <Header>
      <Toggle>
        <span
          role="button"
          tabIndex="0"
          onClick={setmenuActive}
          onKeyUp={setmenuActive}
          className="material-icons"
        >
          menu
        </span>
      </Toggle>
      <TopReference>{topReference}</TopReference>
      <div className="right-side">
        <TopIcon to="/novo-paciente">
          <span className="material-icons-outlined">person_add</span>
          <span className="text">Paciente</span>
        </TopIcon>
        {window.innerWidth < 768 && (
          <>
            <TopIcon to="/novo-paciente">
              <span className="material-icons-outlined">notifications</span>
              <span className="text">Paciente</span>
            </TopIcon>
            <TopIcon to="/configs">
              <span className="material-icons-outlined">settings</span>
              <span className="text">Paciente</span>
            </TopIcon>
          </>
        )}
      </div>
    </Header>
  );
}

TopBar.propTypes = {
  topReference: PropTypes.string.isRequired,
  setmenuActive: PropTypes.func.isRequired,
};
