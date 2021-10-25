import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../../../../styles/GlobalStyles';
import { Container, Note } from './styled';

const Data = [
  'LorLorem ipsum dolor sit afrmet, consectetur adipisicing elit. Quam perferendis adipisci libero illo, mollitia veniam fugiat velit quos cum harum quibusdam non rem nihil voluptates nostrum architecto nesciunt voluptas ametem ipsum dolor sit ,',
  'amet consectetur adipisicfring elit. Fugiat, velit libero dolores kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk ',
  'ad iste quo voluptatum quisfrquam mollitia nihil sed commodi accusamus',
  'cupiditate porroLorem ipsufrm dolor sit amet, consectetur adipisicing elit. Quam perferendis adipisci libero illo, mollitia veniam fugiat velit quos cum harum quibusdam non rem nihil voluptates nostrum architecto nesciunt voluptas amet.aliquam minima doloremque fuga similique ipsum?',
  'Lorem ipsum dolor sifrtv,',
  'amet consectetur adipfrisicing elit. Fugiat, velit libero dolorevs ',
  'ad iste quo volupt3eatum quisquam mollitia nihil sed commodi accvusamus',
  'cLorem ipsum dolor e3sit amet, consectetur adipisicing elit. Quam perferendis adipisci libero illo, mollitia veniam fugiat velit quos cum harum quibusdam non rem nihil voluptates nostrum architecto nesciunt voluptas amet.upiditate porro aliquam minima doloremque fuga similique ipsvum?',
  'amet consectete3ur adipisicing elit. Fugiat, velit libero dolorevs ',
  'ad iste quoe3e voluptatum quisquam mollitia nihil sed commodi accvusamus',
  'cLorem isum e3edolor sit amet, consectetur adipisicing elit. Quam perferendis adipisci libero illo, mollitia veniam fugiat velit quos cum harum quibusdam non rem nihil voluptates nostrum architecto nesciunt voluptas amet.upiditate porro aliquam minima doloremque fuga similique ipsvum?',
  'amet consece3etetur adipisicfring elit. Fugiat, velit libero dolorevs ',
  'ad iste qo ve3eoluptatum quisquam mollitia nihil sed commodi accvusamus',
  'cLorem ipsue3e3 dolor sit amet, consectetur adipisicing elit. Quam perferendis adipisci libero illo, mollitia veniam fugiat velit quos cum harum quibusdam non rem nihil voluptates nostrum architecto nesciunt voluptas amet.upiditate porro aliquam minima doloremque fuga similique ipsvum?',
];

const noteVariants = {
  initial: { color: '#fff' },
  animate: { color: 'var(--font-color)' },
  exit: { color: '#fff' },
  transition: { duration: 1 },

};

export default function Notes() {
  const [notes, setNotes] = useState(Data);
  const [background, setBackground] = useState(false);
  const [Close, setClose] = useState(false);

  const handleClickAddNotes = () => {
    setNotes(['', ...notes]);
  };
  return (
    <Container>
      <div className="header">
        Notas
        <div
          role="button"
          tabIndex={0}
          onKeyUp={handleClickAddNotes}
          onClick={handleClickAddNotes}
          className="add--note"
        >
          Nova nota
          <span
            className="material-icons-outlined"
          >
            add
          </span>
        </div>
      </div>
      <AnimateSharedLayout type="crossfade">
        <motion.div layout className="body">
          {notes.map(content => (
            <NoteContainer
              key={content}
              text={content}
              Close={Close}
              setClose={setClose}
              setBackground={setBackground}
              layout
            />
          ))}
        </motion.div>
        {background
          && (
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key="background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="background"
                onClick={() => setClose(true)}
              />
            </AnimatePresence>
          )}
      </AnimateSharedLayout>

    </Container>
  );
}

function NoteContainer({
  setBackground,
  text,
  Close,
  setClose,
}) {
  const [open, setOpen] = useState(false);
  const [disabled, setdDsabled] = useState(true);
  const textArea = useRef(null);

  useEffect(() => {
    if (Close) {
      setOpen(false);
      setBackground(false);
      setdDsabled(true);
    }
  }, [Close]);

  useEffect(() => {
    if (!disabled) textArea.current.focus();
  }, [disabled]);

  const handleClickOpen = (e) => {
    setOpen(true);
    setBackground(true);
    setClose(false);
  };
  const handleClickClose = (e) => {
    e.stopPropagation();
    setOpen(false);
    setBackground(false);
    setdDsabled(true);
  };

  const formatText = (content) => open ? content : content.substring(0, 35);

  const value = formatText(text);

  return (
    <Note
      onKeyUp={(e) => handleClickOpen(e)}
      onClick={(e) => handleClickOpen(e)}
      layout
      open={open}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            key="header"
            className="note-header"
          >
            <span
              tabIndex={0}
              role="button"
              onKeyUp={(e) => handleClickClose(e)}
              onClick={(e) => handleClickClose(e)}
              className="material-icons-outlined"
            >
              close
            </span>
          </motion.div>
        )}
        <input type="text" key="Input" disabled={disabled} placeholder="titulo" />
        <motion.textarea
          ref={textArea}
          key="area"
          variants={noteVariants}
          initial="initial"
          animate="animate"
          disabled={disabled}
          value={value}
        />
        {open && (
          <Edit setOpen={setOpen} disabled={disabled} setdDsabled={setdDsabled} />
        )}
        <motion.div
          key="footer"
          variants={noteVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2, duration: 0.3 }}
          className="footer"
        >
          <span>Consulta</span>
          <span>10/10/2021</span>
        </motion.div>
      </AnimatePresence>
    </Note>
  );
}

function Edit({ setdDsabled, disabled }) {
  const [askDelete, setAskDelete] = useState(false);

  const handleClickEdit = () => {
    setdDsabled(false);
  };
  const handleClickDelete = () => {
    setAskDelete(true);
  };

  return (
    <AnimatePresence>
      {disabled && !askDelete && (
        <motion.div
          key="editContainer"
          className="edit--button-container"
        >
          <span
            role="button"
            tabIndex={0}
            onKeyUp={handleClickEdit}
            onClick={handleClickEdit}
            className="material-icons-outlined edit"
          >
            edit
          </span>
          <span
            role="button"
            tabIndex={0}
            onKeyUp={handleClickDelete}
            onClick={handleClickDelete}
            className="material-icons-outlined edit"
          >
            delete
          </span>
        </motion.div>
      )}
      {!disabled && !askDelete && (
        <motion.div
          key="button--container"
          className="edit--button-container"
        >

          <Button
            onClick={() => setdDsabled(true)}
          >
            Cancelar
          </Button>
          <Button>Salvar</Button>
        </motion.div>
      )}
      {askDelete && (
        <motion.div
          key="ask--container"
          className="edit--button-container"
        >
          <span>Você realmente deseja deletar essa nota?</span>
          <span className="delete--btn">Deletar</span>
          <span
            role="button"
            tabIndex={0}
            onKeyUp={() => setAskDelete(false)}
            onClick={() => setAskDelete(false)}
            className="delete--btn"
          >
            Cancelar
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
