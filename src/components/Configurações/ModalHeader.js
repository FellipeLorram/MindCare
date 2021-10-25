import React from 'react';
import { ModalHeader } from '../../styles/GlobalStyles';

export default function ModalHeaderAbstract({ SetshowModal, text }) {
  const handleCloseClick = () => {
    SetshowModal(false);
  };
  return (
    <ModalHeader>
      <span className="header--configs">{text}</span>
      <span
        tabIndex={0}
        role="button"
        onKeyUp={handleCloseClick}
        onClick={handleCloseClick}
        className="material-icons-outlined"
      >
        close
      </span>
    </ModalHeader>
  );
}
