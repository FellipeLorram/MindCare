import React, { useState } from 'react';
import { CardBox, CardContent, CardHeader } from './styled';
import ModalPatients from './ModalPatients';

const boxVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export default function Card({
  HeaderText,
  patients,
  animationDuration,
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ModalPatients
        patients={patients}
        day={HeaderText}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <CardBox
        onClick={() => setShowModal(true)}
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: animationDuration,
          duration: 0.1,
          type: 'spring',
          stiffness: 120,
        }}
      >
        <CardHeader>{HeaderText}</CardHeader>
        {patients.reduce((result, p, i) => {
          const patient = p[0].split(' ')[0];
          if (i < 3) {
            result.push(
              <CardContent key={p[0]}>
                <span>{patient}</span>
                <span>{p[1]}</span>
              </CardContent>,
            );
          }
          return result;
        }, [])}
      </CardBox>
    </>
  );
}
