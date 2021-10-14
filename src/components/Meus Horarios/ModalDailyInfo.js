import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import HeaderDailyInfo from './HeaderDailyInfo';
import { ModalBackground, ModalContainer, ModalHeader } from '../Central de Controle/Card/styled';
import { ModalBody, ModalBodyHorarios } from './styled';

const backDrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};
const modalVariants = {
  hidden: { x: '100vh', scale: 0 },
  visible: { x: 0, scale: 1 },
  exit: { x: '-100vh', scale: 0 },
};

const Data = [
  { pacientes: 10 },
  { pacientes: 1 },
  { pacientes: 0 },
  { pacientes: 150 },
  { pacientes: 104 },
  { pacientes: 10222 },
];

export default function ModalDailyInfo({ day, showModal, setShowModal }) {
  const days = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabádo'];
  const [content, setContent] = useState();
  const [currentDay, setCurrentDay] = useState('');
  const [index, setIndex] = useState(days.indexOf(day));

  useEffect(() => {
    setIndex(days.indexOf(day));
    setCurrentDay(days[index]);
    setContent(Data[index]);
  }, [showModal]);

  useEffect(() => {
    setCurrentDay(days[index]);
    setContent(Data[index]);
  }, [index]);

  const handleCloseClick = () => {
    setShowModal(false);
  };

  return (
    <AnimatePresence>
      {showModal && (
        <ModalBackground
          variants={backDrop}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalContainer
            variants={modalVariants}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="large"
          >
            <ModalHeader
              className="end"
            >
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

            <HeaderDailyInfo
              setIndex={setIndex}
              setCurrentDay={setCurrentDay}
              day={currentDay}
            />
            <ModalBody>
              <ModalBodyHorarios>
                <span className="horarios">3</span>
                <span className="horarios">3</span>
                <span className="horarios">3</span>
                <span className="horarios">3</span>
              </ModalBodyHorarios>
            </ModalBody>
          </ModalContainer>
        </ModalBackground>
      )}
    </AnimatePresence>
  );
}
