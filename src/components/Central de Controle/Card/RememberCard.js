import React, { useState } from 'react';
import ModalRemember from './ModalRemembers';
import { Note, CardContainer, CardContainerHeader } from './styled';

export default function RememberCard({ NotesData }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ModalRemember
        notes={NotesData}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <CardContainer
        onClick={() => setShowModal(true)}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0,
          duration: 0.1,
          type: 'spring',
          stiffness: 120,
        }}
      >
        <CardContainerHeader>
          Meus Lembretes
          <span className="material-icons button">post_add</span>
        </CardContainerHeader>
        {NotesData.map(NoteData => <Note key={NoteData.criadoEm}>{NoteData.content.length > 19 ? `${NoteData.content.substring(0, 20)}...` : NoteData.content}</Note>)}
      </CardContainer>
    </>
  );
}
