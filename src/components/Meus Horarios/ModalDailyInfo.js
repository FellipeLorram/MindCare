import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import HeaderDailyInfo from './HeaderDailyInfo';
import { ModalBackground, ModalContainer, ModalHeader } from '../Central de Controle/Card/styled';
import { ModalBody, ModalBodyHorarios, ModalBodyHorariosContent } from './styled';
import { GlobalContext } from '../../contexts/App/index';
import ModalSchedule from './ModalSchedule';
import ModalRelatory from './ModalRelatory';
import ModalFinancial from './ModalFinancial';

const backDrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};
const modalVariants = {
  hidden: { x: '100vh', scale: 0 },
  visible: {
    x: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
  },
  exit: { x: '100vh', scale: 0 },
};

const Data = [
  {
    pacientes: 10,
    horarios: [
      ['9:00', '', ''],
      ['10:00', '', ''],
      ['11:00', '', ''],
      ['12:00', '', ''],
      ['13:00', 'Beatriz Mendonça', '80'],
      ['14:00', ''],
      ['15:00', 'Peterson Teixeira', '25'],
      ['16:00', ''],
      ['17:00', 'Maria Alzair', '100'],
      ['18:00', '', ''],
      ['19:00', '', ''],
      ['20:00', '', ''],
      ['21:00', '', ''],
    ],
    nextPayments: [
      ['Beatriz Mendonça', '10/11'],
      ['Maria Alzair', '12/11'],
      ['Peterson Teixeira', 'Hoje'],
    ],
    late: [
      ['Maria Alzair', '12/10'],
    ],
  },
  {
    pacientes: 10,
    horarios: [
      ['9:00', '', ''],
      ['10:00', '', ''],
      ['11:00', '', ''],
      ['12:00', '', ''],
      ['13:00', 'Beatriz Mendonça', '80'],
      ['14:00', ''],
      ['15:00', 'Peterson Teixeira', '25'],
      ['16:00', ''],
      ['17:00', 'Maria Alzair', '100'],
      ['18:00', '', ''],
      ['19:00', '', ''],
      ['20:00', '', ''],
      ['21:00', '', ''],
    ],
    nextPayments: [
      ['Beatriz Mendonça', '10/11'],
      ['Maria Alzair', '12/11'],
      ['Peterson Teixeira', 'Hoje'],
    ],
    late: [
      ['Maria Alzair', '12/10'],
    ],
  },
  {
    pacientes: 10,
    horarios: [
      ['9:00', '', ''],
      ['10:00', '', ''],
      ['11:00', '', ''],
      ['12:00', '', ''],
      ['13:00', 'Beatriz Mendonça', '80'],
      ['14:00', ''],
      ['15:00', 'Peterson Teixeira', '25'],
      ['16:00', ''],
      ['17:00', 'Maria Alzair', '100'],
      ['18:00', '', ''],
      ['19:00', '', ''],
      ['20:00', '', ''],
      ['21:00', '', ''],
    ],
    nextPayments: [
      ['Beatriz Mendonça', '10/11'],
      ['Maria Alzair', '12/11'],
      ['Maria Alzair', '12/11'],
      ['Peterson Teixeira', 'Hoje'],
    ],
    late: [
      ['Maria Alzair', '12/10'],
      ['Maria Alzair', '12/10'],
      ['Maria Alzair', '12/10'],
      ['Maria Alzair', '12/10'],
    ],
  },
  {
    pacientes: 10,
    horarios: [
      ['9:00', '', ''],
      ['10:00', '', ''],
      ['11:00', '', ''],
      ['12:00', '', ''],
      ['13:00', 'Beatriz Mendonça', '80'],
      ['14:00', ''],
      ['15:00', 'Peterson Teixeira', '25'],
      ['16:00', ''],
      ['17:00', 'Maria Alzair', '100'],
      ['18:00', '', ''],
      ['19:00', '', ''],
      ['20:00', '', ''],
      ['21:00', '', ''],
    ],
    nextPayments: [
      ['Beatriz Mendonça', '10/11'],
      ['Maria Alzair', '12/11'],
      ['Peterson Teixeira', 'Hoje'],
    ],
    late: [
      ['Maria Alzair', '12/10'],
    ],
  },
  {
    pacientes: 10,
    horarios: [
      ['9:00', '', ''],
      ['10:00', '', ''],
      ['11:00', '', ''],
      ['12:00', '', ''],
      ['13:00', 'Beatriz Mendonça', '80'],
      ['14:00', ''],
      ['15:00', 'Peterson Teixeira', '25'],
      ['16:00', ''],
      ['17:00', 'Maria Alzair', '100'],
      ['18:00', '', ''],
      ['19:00', '', ''],
      ['20:00', '', ''],
      ['21:00', '', ''],
    ],
    nextPayments: [
      ['Beatriz Mendonça', '10/11'],
      ['Maria Alzair', '12/11'],
      ['Peterson Teixeira', 'Hoje'],
    ],
    late: [
      ['Maria Alzair', '12/10'],
    ],
  },
  {
    pacientes: 10,
    horarios: [
      ['9:00', '', ''],
      ['10:00', '', ''],
      ['11:00', '', ''],
      ['12:00', '', ''],
      ['13:00', 'Beatriz Mendonça', '80'],
      ['14:00', ''],
      ['15:00', 'Peterson Teixeira', '25'],
      ['16:00', ''],
      ['17:00', 'Maria Alzair', '100'],
      ['18:00', '', ''],
      ['19:00', '', ''],
      ['20:00', '', ''],
      ['21:00', '', ''],
    ],
    nextPayments: [
      ['Beatriz Mendonça', '10/11'],
      ['Maria Alzair', '12/11'],
      ['Peterson Teixeira', 'Hoje'],
    ],
    late: [
      ['Maria Alzair', '12/10'],
    ],
  },
];

export default function ModalDailyInfo({ day, showModal, setShowModal }) {
  const days = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabádo'];
  const [content, setContent] = useState();
  const [currentDay, setCurrentDay] = useState('');
  const [index, setIndex] = useState(days.indexOf(day));
  const bodyContext = useContext(GlobalContext);

  useEffect(() => {
    setIndex(days.indexOf(day));
    setCurrentDay(days[index]);
    setContent(Data[index]);
    if (showModal) bodyContext.setBodyBlock(true);
  }, [showModal]);

  useEffect(() => {
    setCurrentDay(days[index]);
    setContent(Data[index]);
  }, [index]);

  const handleCloseClick = () => {
    setShowModal(false);
    bodyContext.setBodyBlock(false);
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
            className="large"
          >
            <Header handleCloseClick={handleCloseClick} />

            <HeaderDailyInfo
              setIndex={setIndex}
              setCurrentDay={setCurrentDay}
              day={currentDay}
            />
            <Body content={content} />
          </ModalContainer>
        </ModalBackground>
      )}
    </AnimatePresence>
  );
}

function Header({ handleCloseClick }) {
  return (
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
  );
}

function Body({ content }) {
  return (
    <ModalBody>
      <ModalSchedule content={content} />
      <ModalRelatory />
      <ModalFinancial nextPayments={content.nextPayments} late={content.late} />
    </ModalBody>
  );
}
