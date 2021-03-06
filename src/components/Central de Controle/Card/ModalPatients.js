import { AnimatePresence } from 'framer-motion';
import React, { useState, useEffect, useContext } from 'react';
import { Button } from '../../../styles/GlobalStyles';
import { GlobalContext } from '../../../contexts/App/index';
import {
  ModalBackground,
  ModalBody,
  ModalBodyContent,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  StyledLink,
} from './styled';

const backDrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: '-100vw', scale: 0 },
  visible: { y: 0, scale: 1 },
  exit: { y: '100vw', scale: 0 },
};

export default function ModalPatients({
  patients,
  setShowModal,
  showModal,
  day,
}) {
  const [lastWords, setLastWords] = useState('-feira');
  const bodyContext = useContext(GlobalContext);

  useEffect(() => {
    if (day === 'Hoje' || day === 'Sabádo' || day === 'Amanhã') setLastWords('');
  }, []);

  useEffect(() => {
    if (showModal) bodyContext.setBodyBlock(true);
  }, [showModal]);

  const handleCloseClick = () => {
    setShowModal(false);
    bodyContext.setBodyBlock(false);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal
        && (
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
            >
              <ModalHeader>
                <span className="header--day">
                  {day}
                  {lastWords}
                </span>
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
              <ModalBody>
                {patients.map(patient => (
                  <>
                    <BodyContent
                      key={patient[1]}
                      patientName={patient[0]}
                      AppointmentHour={patient[1]}
                    />
                  </>
                ))}
              </ModalBody>
              <ModalFooter>
                <StyledLink to="/meus-horarios">
                  Ver Horarios Completos
                </StyledLink>
              </ModalFooter>
            </ModalContainer>
          </ModalBackground>
        )}
    </AnimatePresence>
  );
}

function BodyContent({ patientName, AppointmentHour }) {
  const [btnFoulText, setBtnFoulText] = useState('Adicionar');

  const handleClickAddFoul = () => {
    setBtnFoulText(text => text === 'Adicionar' ? 'Remover' : 'Adicionar');
  };
  return (
    <ModalBodyContent>
      <div className="modalBody--left-side">
        <span className="hour">{AppointmentHour}</span>
        <span className="patient">{patientName}</span>
      </div>
      <div className="modalBody--right-side">
        <Button>Consulta</Button>
        <Button
          onClick={handleClickAddFoul}
          color="var(--red-color)"
        >
          {`${btnFoulText} `}
          Falta
        </Button>
      </div>
    </ModalBodyContent>

  );
}
