import React, { useState } from 'react';
import ModalDailyInfo from './ModalDailyInfo';
import {
  DayContainer,
  DayContainerHeader,
  DayContainerBody,
  DayContainerBodyContent,
  DayContainerFooter,
} from './styled';

export default function CardBoxDay({ Day, delayDuration }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ModalDailyInfo day={Day} setShowModal={setShowModal} showModal={showModal} />
      <DayContainer
        onClick={() => setShowModal(true)}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: delayDuration,
          duration: 0.1,
          type: 'spring',
          damping: 10,
          stiffness: 200,
        }}
      >
        <DayContainerHeader>{Day}</DayContainerHeader>
        <DayContainerBody>
          <DayContainerBodyContent>
            <div>
              <span>9:00</span>
              <span className="patient">Fellipe</span>
            </div>
            <div>
              <span>10:00</span>
              <span className="patient">Fellipe</span>
            </div>
            <div>
              <span>11:00</span>
              <span className="patient">Fellipe</span>
            </div>
            <div>
              <span>12:00</span>
              <span className="patient">Fellipe</span>
            </div>
          </DayContainerBodyContent>
          <DayContainerBodyContent>
            <div>
              <span>13:00</span>
              <span className="patient">Fellipe</span>
            </div>
            <div>
              <span>14:00</span>
              <span className="patient">Fellipe</span>
            </div>
            <div>
              <span>15:00</span>
              <span className="patient">Fellipe</span>
            </div>
            <div>
              <span>16:00</span>
              <span className="patient">Fellipe</span>
            </div>
          </DayContainerBodyContent>
          <DayContainerBodyContent>
            <div>
              <span>17:00</span>
              <span className="patient">Fellipe</span>
            </div>
            <div>
              <span>18:00</span>
              <span className="patient" />
            </div>
            <div>
              <span>19:00</span>
              <span className="patient">Fellipe</span>
            </div>
            <div>
              <span>20:00</span>
              <span className="patient">Fellipe</span>
            </div>
          </DayContainerBodyContent>
        </DayContainerBody>
        <DayContainerFooter>
          <div>
            <span>Disponíveis:</span>
            <span>10</span>
          </div>
          <div>
            <span>Pacientes:</span>
            <span>10</span>
          </div>
          <div>
            <span>Peso:</span>
            <span>10%</span>
          </div>
          <span className="material-icons-outlined">
            more_vert
          </span>
        </DayContainerFooter>
      </DayContainer>
    </>
  );
}
