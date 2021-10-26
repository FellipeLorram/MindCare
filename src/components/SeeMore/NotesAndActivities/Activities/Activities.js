import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Button, SmallButton } from '../../../../styles/GlobalStyles';
import { Container, Note } from '../Notes/styled';
import { Activitie } from './styled';

const Data = [
  {
    title: 'jogo da memoria',
    content: 'pergunta 1: blablabla',
    participation: '3/10',
    createWhere: 'Consulta',
    CriadoEm: Date.now(),
  },
  {
    title: 'jogo dos pontos',
    content: 'pergunta 1: blablabla',
    participation: '6/10',
    observation: '3',
    createWhere: 'Avulso',

    CriadoEm: Date.now(),
  },
  {
    title: 'retorica',
    content: 'pergunta 1: blablabla',
    participation: '5/10',
    observation: '3',
    createWhere: 'Consulta',

    CriadoEm: Date.now(),
  },
  {
    title: 'retorica2',
    content: 'pergunta 1: blablabla',
    participation: '5/10',
    observation: '3',
    createWhere: 'Consulta',

    CriadoEm: Date.now(),
  },
  {
    title: 'retorica3',
    content: 'pergunta 1: blablabla',
    participation: '5/10',
    observation: '3',
    createWhere: 'Consulta',

    CriadoEm: Date.now(),
  },
  {
    title: 'retorica4',
    content: 'pergunta 1: blablabla',
    participation: '5/10',
    observation: '3',
    createWhere: 'Consulta',

    CriadoEm: Date.now(),
  },
];

const noteVariants = {
  initial: { color: '#fff' },
  animate: { color: 'var(--font-color)' },
  exit: { color: '#fff' },
  transition: { duration: 1 },

};

export default function Activities() {
  const [activities, setActivities] = useState(Data);
  const [background, setBackground] = useState(false);
  const [Close, setClose] = useState(false);

  const handleClickAddActivities = () => {
    setActivities([
      {
        title: '', content: '', participation: '', createWhere: 'Avulso', CriadoEm: Date.now(),
      }, ...activities]);
  };

  return (
    <Container>
      <div className="header">
        Atividades
        <div
          role="button"
          tabIndex={0}
          onKeyUp={handleClickAddActivities}
          onClick={handleClickAddActivities}
          className="add--note"
        >
          Nova atividade
          <span
            className="material-icons-outlined"
          >
            add
          </span>
        </div>
      </div>
      <AnimateSharedLayout type="crossfade">
        <motion.div layout className="body">
          {activities.map(content => (
            <ActivitiesContainer
              key={content.title}
              content={content}
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
                key="backgroundActivites"
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

function ActivitiesContainer({
  setBackground,
  content,
  Close,
  setClose,
}) {
  const [open, setOpen] = useState(false);
  const [disabled, setdDsabled] = useState(true);
  const textArea = useRef(null);
  const dateFormat = new Date(content.CriadoEm);

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

  return (
    <Activitie
      onKeyUp={(e) => handleClickOpen(e)}
      onClick={(e) => handleClickOpen(e)}
      layout
      open={open}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            key="headerActivites"
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

        <input key="ActivitesInput" type="text" value={content.title} disabled={disabled} placeholder="titulo" />
        <motion.textarea
          ref={textArea}
          key="areaActivites"
          variants={noteVariants}
          initial="initial"
          animate="animate"
          disabled={disabled}
          value={content.content}
        />
        {open && (
          <Edit setOpen={setOpen} disabled={disabled} setdDsabled={setdDsabled} />
        )}

        <Footer participation={content.participation} open={open} date={dateFormat.toLocaleDateString('pt-BR')} where={content.createWhere} />
      </AnimatePresence>

    </Activitie>
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
    <div className="edit--button-container--wrapper">
      <AnimatePresence exitBeforeEnter>
        {disabled && !askDelete && (
          <motion.div
            key="editContainerActivites"
            className="edit--button-container"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.1 }}
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
            key="button--containerActivites"
            className="edit--button-container"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.1 }}
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
            key="ask--containerActivites"
            className="edit--button-container"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.1 }}
          >
            <span>Você realmente deseja deletar essa Atividade?</span>
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
    </div>
  );
}

function Footer({
  date,
  where,
  participation,
  open,
}) {
  const [disabled, setDisable] = useState(true);
  const handleClickEdit = () => {
    setDisable(false);
  };
  return (
    <motion.div
      key="footerActivites"
      variants={noteVariants}
      initial="initial"
      animate="animate"
      transition={{ delay: 0.2, duration: 0.3 }}
      className="footer"
    >
      {open ? (
        <>
          <div className="footer-content">
            <span>{where}</span>
            <span>{date}</span>

          </div>
          <div className="footer-content">
            <span>Participação</span>
            <input disabled={disabled} type="text" value={participation} />
            <AnimatePresence exitBeforeEnter>
              {disabled ? (
                <motion.span
                  key="spanEdit"
                  role="button"
                  tabIndex={0}
                  onKeyUp={handleClickEdit}
                  onClick={handleClickEdit}
                  className="material-icons-outlined edit"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.1 }}
                >
                  edit
                </motion.span>
              ) : (
                <motion.div
                  key="btnContainer"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.1 }}
                  className="span--container"
                >
                  <span
                    role="button"
                    tabIndex={0}
                    onKeyUp={() => setDisable(true)}
                    onClick={() => setDisable(true)}
                    className="cancel--span"
                  >
                    Cancelar
                  </span>
                  <span
                    className="edit--span"
                  >
                    Salvar
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      )
        : (
          <>
            <span>{where}</span>
            <span>{date}</span>
          </>
        )}
    </motion.div>
  );
}
