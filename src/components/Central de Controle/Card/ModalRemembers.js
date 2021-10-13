import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import {
  AddRemember,
  ModalBackground,
  ModalBody,
  ModalBodyRemembers,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  Remember,
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

export default function ModalRemember({
  notes,
  setShowModal,
  showModal,
}) {
  const [notesState, setNotesState] = useState(notes);

  const handleAddClick = () => {
    setNotesState([...notesState, '']);
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
              <ModalHeader
                color
              >
                <span className="header--lembretes">
                  Lembretes
                </span>
                <span
                  tabIndex={0}
                  role="button"
                  onKeyUp={() => setShowModal(false)}
                  onClick={() => setShowModal(false)}
                  className="material-icons-outlined remembers"
                >
                  close
                </span>
              </ModalHeader>
              <ModalBodyRemembers>
                {notesState.map(note => (
                  <RememberCard note={note.content} noteDate={note.criadoEm} />
                ))}
                <AddRemember
                  onClick={handleAddClick}
                >
                  <span className="material-icons-outlined">
                    add
                  </span>
                </AddRemember>
              </ModalBodyRemembers>
              <ModalFooter />
            </ModalContainer>
          </ModalBackground>
        )}
    </AnimatePresence>
  );
}

function RememberCard({ note, noteDate }) {
  const [disable, setdisable] = useState(true);
  const [value, setValue] = useState(note);
  const [classListDelete, setClassListDelete] = useState('material-icons-outlined trash');
  const [classListEdit, setClassListEdit] = useState('material-icons-outlined edit');
  const dateFormat = new Date(noteDate);

  return (
    <Remember>
      <textarea disabled={disable} value={value} onChange={(e) => setValue(e.target.value)} />
      <div className="remember-footer">
        <span className="Date">{dateFormat.toLocaleDateString('pt-BR')}</span>
        <div className="delete_edit_container">
          <span
            onMouseEnter={() => setClassListDelete('material-icons trash')}
            onMouseLeave={() => setClassListDelete('material-icons-outlined trash')}
            className={classListDelete}
          >
            delete_forever
          </span>
          <span
            onMouseEnter={() => setClassListEdit('material-icons edit')}
            onMouseLeave={() => setClassListEdit('material-icons-outlined edit')}
            onKeyUp={() => setdisable(false)}
            onClick={() => setdisable(false)}
            role="button"
            tabIndex={0}
            className={classListEdit}
          >
            mode_edit
          </span>
        </div>
      </div>
    </Remember>
  );
}
