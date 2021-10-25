import { AnimatePresence } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import {
  Button,
  ModalBackground,
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
} from '../../../styles/GlobalStyles';
import { GlobalContext } from '../../../contexts/App/index';
import PaymentCost from '../../Form/PaymentCost';

const backDrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
  exit: { scale: 0 },
};

export default function ModalEditAppoitmentsPay({
  showModal,
  setShowModal,
}) {
  const bodyContext = useContext(GlobalContext);
  useEffect(() => {
    if (showModal) bodyContext.setBodyBlock(true);
  }, [showModal]);

  const closeModalClick = () => {
    setShowModal(false);
    bodyContext.setBodyBlock(false);
  };
  return (
    <AnimatePresence>
      {showModal && (
        <ModalBackground
          variants={backDrop}
          animate="visible"
          initial="hidden"
          exit="exit"
        >
          <ModalContainer
            variants={modalVariants}
            animate="visible"
            initial="hidden"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="medium--height"
          >
            <ModalHeader>
              <span>
                Escolha o novo dia de pagamento
              </span>
              <span
                tabIndex={0}
                role="button"
                onKeyUp={closeModalClick}
                onClick={closeModalClick}
                className="material-icons-outlined"
              >
                close
              </span>
            </ModalHeader>
            <Body />
            <ModalFooter>
              <Button>Salvar</Button>
            </ModalFooter>
          </ModalContainer>
        </ModalBackground>
      )}
    </AnimatePresence>
  );
}

function Body() {
  return (
    <ModalBody bgColor="var(--palette-color--second)">
      <PaymentCost col />
    </ModalBody>
  );
}
