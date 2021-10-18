import React from 'react';
import { ModalFooter, Button } from '../../styles/GlobalStyles';

export default function ModalFooterAbstract({ SetshowModal, text }) {
  const handleCloseClick = () => {
    SetshowModal(false);
  };
  return (
    <ModalFooter>
      <Button
        onClick={handleCloseClick}
      >
        Salvar
      </Button>
    </ModalFooter>
  );
}
