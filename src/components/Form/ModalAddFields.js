import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {
  HeaderSpan,
  InputField,
  ModalBackground,
  ModalBody,
  ModalContainer,
  ModalField,
  ModalFooter,
  ModalHeader,
} from './styled';

const backDrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: '-100vh' },
  visible: { y: 0 },
  exit: { y: '100vh' },
};

const customFieldVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      delay: 0.2, duration: 0.2,
    },
  },
  exit: { scale: 1 },
};

export default function ModalAddFields({ showModal, setShowModal, setAddFields }) {
  const [customFieldsBody, setCustomFieldsBody] = useState(false);
  const [fieldTexts, setFieldTexts] = useState(['Co-morbidades',
    'Atividades Atuais',
    'Rotina Diária',
    'Uso de álcool, cigarro, outros',
    'Internação/cirurgias',
    'Tratamentos anteriores/atuais',
    'História',
    'Queixa principal',
    'Composição familiar',
    'Antecedente familiar',
    'Responsável/acompanhante',
    'Encaminhamento',
    'Médico responsável',
    'Medicação atual',
    'Diagnóstico/Seqüela',
  ]);
  const [fields, setFields] = useState([]);
  const [inputAddFields, setInputAddFields] = useState('');
  const [selectedModalHeader, setSelectedModalHeader] = useState([true, false]);

  const handleAddButtonClick = () => {
    setAddFields(fields);
    setShowModal(false);
    setFieldTexts(prevArr => prevArr.filter(item => !fields.includes(item)));
  };

  const handleAddCustomButtonClick = () => {
    setAddFields(prevArr => [...prevArr, inputAddFields]);
    setFields(prevArr => [...prevArr, inputAddFields]);
    setShowModal(false);
  };

  const handleClickHeaderSpan = (e) => {
    if (e.target.classList.contains('escolha--seu--campo')) {
      setCustomFieldsBody(false);
      setSelectedModalHeader([true, false]);
    } else {
      setCustomFieldsBody(true);
      setSelectedModalHeader([false, true]);
    }
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
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
              <div className="header--left">
                <HeaderSpan
                  className="escolha--seu--campo"
                  selectedHeader={selectedModalHeader[0]}
                  tabIndex={0}
                  role="button"
                  onKeyUp={e => handleClickHeaderSpan(e)}
                  onClick={e => handleClickHeaderSpan(e)}
                >
                  Escolha o campo
                </HeaderSpan>
                <HeaderSpan
                  className="personalize--seu--campo"
                  selectedHeader={selectedModalHeader[1]}
                  tabIndex={0}
                  role="button"
                  onKeyUp={e => handleClickHeaderSpan(e)}
                  onClick={e => handleClickHeaderSpan(e)}
                >
                  Personalizar
                </HeaderSpan>
              </div>
              <span
                tabIndex={0}
                role="button"
                onKeyUp={() => setShowModal(false)}
                onClick={() => setShowModal(false)}
                className="material-icons-outlined"
              >
                close
              </span>
            </ModalHeader>
            <ModalBody>
              <AnimatePresence exitBeforeEnter>
                {customFieldsBody
                  && (
                    <motion.div
                      className="custom--field--container"
                      variants={customFieldVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <label>
                        Nome do campo
                        <InputField onChange={(event) => setInputAddFields(event.target.value)} />
                      </label>
                    </motion.div>
                  )}
              </AnimatePresence>
              <AnimatePresence exitBeforeEnter>
                {!customFieldsBody
                  && (
                    <motion.div
                      className="field--container"
                      variants={customFieldVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {fieldTexts.map(text => (
                        <Field
                          key={text}
                          setFields={setFields}
                          text={text}
                        />
                      ))}
                    </motion.div>
                  )}
              </AnimatePresence>
            </ModalBody>
            <ModalFooter>
              <button onClick={customFieldsBody ? handleAddCustomButtonClick : handleAddButtonClick} type="button">Adicionar</button>
            </ModalFooter>
          </ModalContainer>
        </ModalBackground>
      )}
    </AnimatePresence>
  );
}

function Field({ text, setFields }) {
  const [selected, setselected] = useState(false);

  function handleClick(textField) {
    setselected(!selected);
    setFields(prevArr => (
      prevArr.includes(textField))
      ? prevArr.filter(item => item !== textField) : [...prevArr, textField]);
  }

  return (
    <ModalField
      selected={selected}
      onClick={() => handleClick(text)}
    >
      {text}
    </ModalField>
  );
}
