import { AnimatePresence } from 'framer-motion';
import React,
{
  useState,
  useEffect,
  useRef,
  useContext,
} from 'react';
import {
  AddRemember,
  ModalBackground,
  ModalBodyRemembers,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  Remember,
} from './styled';
import { GlobalContext } from '../../../contexts/App/index';

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
  const [disable, setDisable] = useState([]);
  const [notesToDelete, setNotesToDelete] = useState([]);
  const bodyContext = useContext(GlobalContext);

  useEffect(() => {
    if (showModal) bodyContext.setBodyBlock(true);
  }, [showModal]);

  useEffect(() => {
    setDisable(prevArr => notesState.map(() => true));
  }, [notesState]);

  let count = 0;

  const handleAddClick = () => {
    setNotesState([...notesState, { content: '', criadoEm: Date.now() }]);
  };
  const closeModalClick = () => {
    setShowModal(false);
    if (notesToDelete.length > 0) notesToDelete.forEach(note => {
      setNotesState(prevArr => {
        prevArr.splice(note, 1);
        return prevArr;
      });
    });
    setNotesToDelete([]);
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
              <ModalHeader
                color="true"
              >
                <span className="header--lembretes">
                  Lembretes
                </span>
                <span
                  tabIndex={0}
                  role="button"
                  onKeyUp={closeModalClick}
                  onClick={closeModalClick}
                  className="material-icons-outlined remembers"
                >
                  close
                </span>
              </ModalHeader>
              <ModalBodyRemembers>
                {
                  notesState.map(note => {
                    count += 1;
                    return (
                      <RememberCard
                        key={count - 1}
                        note={note.content}
                        noteDate={note.criadoEm}
                        setDisable={setDisable}
                        disable={disable[count - 1]}
                        index={count - 1}
                        setNotesState={setNotesState}
                        setNotesToDelete={setNotesToDelete}
                      />
                    );
                  })
                }
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

function RememberCard({
  note,
  noteDate,
  disable,
  setDisable,
  index,
  setNotesToDelete,
}) {
  const textArea = useRef(null);
  const [value, setValue] = useState(note);
  const [classListTextArea, setClassListTextArea] = useState('');
  const [classListDeleteConfirm, setClassListDeleteConfirm] = useState('delete-confirm');
  const [classListRemember, setClassListRemember] = useState('');
  const [classListDelete, setClassListDelete] = useState('material-icons-outlined trash');
  const [classListEdit, setClassListEdit] = useState('material-icons-outlined edit');
  const dateFormat = new Date(noteDate);

  useEffect(() => {
    if (!disable) textArea.current.focus();
  }, [disable]);

  const handleEditClick = () => {
    setClassListRemember(classList => classList === 'editing' ? '' : 'editing');

    setDisable(prevArr => {
      const newArr = prevArr.map(item => true);
      if (classListRemember === 'editing') return newArr;
      newArr[index] = false;
      return newArr;
    });
  };

  const handleDeleteClick = () => {
    setClassListDeleteConfirm('delete-confirm appear');
    setClassListTextArea('toDelete');
    setNotesToDelete(prevArr => [index, ...prevArr]);
  };

  const handleCancelClick = () => {
    setClassListDeleteConfirm('delete-confirm');
    setClassListTextArea('');
    setNotesToDelete(prevArr => {
      const newArr = prevArr;
      newArr.splice(newArr.indexOf(index), 1);
      return newArr;
    });
  };

  const handleBlurTextArea = () => {
    setDisable(prevArr => {
      const newArr = prevArr.map(item => true);
      return newArr;
    });
    setClassListRemember('');
  };

  return (
    <Remember className={classListRemember}>
      <textarea
        className={classListTextArea}
        ref={textArea}
        onBlur={handleBlurTextArea}
        disabled={disable}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span
        role="button"
        tabIndex={0}
        onKeyUp={handleCancelClick}
        onClick={handleCancelClick}
        className={classListDeleteConfirm}
      >
        Cancelar
      </span>
      <div className="remember-footer">
        <span className="Date">{dateFormat.toLocaleDateString('pt-BR')}</span>
        <div className="delete_edit_container">
          <span
            onMouseEnter={() => setClassListDelete('material-icons trash')}
            onMouseLeave={() => setClassListDelete('material-icons-outlined trash')}
            onKeyUp={handleDeleteClick}
            onClick={handleDeleteClick}
            role="button"
            tabIndex={0}
            className={classListDelete}
          >
            delete_forever
          </span>
          <span
            onMouseEnter={() => setClassListEdit('material-icons edit')}
            onMouseLeave={() => setClassListEdit('material-icons-outlined edit')}
            onKeyUp={handleEditClick}
            onClick={handleEditClick}
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
