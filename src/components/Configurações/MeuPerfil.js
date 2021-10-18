import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { InputContainer } from './styled';
import {
  ModalBackground,
  ModalContainer,
  ModalBody,
  ModalFooter,
} from '../../styles/GlobalStyles';
import ModalHeaderAbstract from './ModalHeader';
import ModalFooterAbstract from './ModalFooter';

const backDrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: '-100vh', scale: 0 },
  visible: { y: 0, scale: 1 },
  exit: { y: '-100vh', scale: 0 },
};

export default function MeuPerfil({ showModal, SetshowModal }) {
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
            transition={{ duration: 0.3 }}
          >
            <ModalHeaderAbstract text="Meu Perfil" SetshowModal={SetshowModal} />
            <Body />
            <ModalFooterAbstract SetshowModal={SetshowModal} />
          </ModalContainer>
        </ModalBackground>
      )}
    </AnimatePresence>
  );
}

function Body() {
  return (
    <ModalBody initialGap initialPadding>
      <Input label="Nome do usuário" value="Nome do usuário" />
      <InputEmail label="E-mail" value="E-mail" />
      <InputPassword label="Senha" value="Senha" />
    </ModalBody>
  );
}

function InputEmail({ label, value }) {
  const [disabled, setdisabled] = useState(true);
  const [emailConfirm, setEmailConfirm] = useState(false);
  const input = useRef(null);

  const handleEditClick = () => {
    setdisabled(!disabled);
    setEmailConfirm(!emailConfirm);
  };

  useEffect(() => {
    if (!disabled) {
      input.current.focus();
    }
  }, [disabled]);

  const handleBlur = () => {
    if (!emailConfirm) setdisabled(true);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <InputContainer>
        <label>
          {label}
        </label>
        <span className="input">
          <input
            onBlur={handleBlur}
            ref={input}
            type="text"
            value={value}
            disabled={disabled}
          />
          <span
            tabIndex={0}
            role="button"
            onKeyUp={handleEditClick}
            onClick={handleEditClick}
            className="material-icons-outlined"
          >
            edit
          </span>
        </span>
      </InputContainer>
      {emailConfirm && (
        <InputContainer
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          exit={{ y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <label>
            Confirmar E-mail
          </label>
          <span className="input">
            <input
              type="text"
            />
          </span>
        </InputContainer>
      )}
    </AnimatePresence>
  );
}

function InputPassword({ label, value }) {
  const [disabled, setdisabled] = useState(true);
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const input = useRef(null);

  const handleEditClick = () => {
    setdisabled(!disabled);
    setPasswordConfirm(!passwordConfirm);
  };

  useEffect(() => {
    if (!disabled) {
      input.current.focus();
    }
  }, [disabled]);

  const handleBlur = () => {
    if (!passwordConfirm) setdisabled(true);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <InputContainer>
        <label>
          {label}
        </label>
        <span className="input">
          <input
            onBlur={handleBlur}
            ref={input}
            type="text"
            value={value}
            disabled={disabled}
          />
          <span
            tabIndex={0}
            role="button"
            onKeyUp={handleEditClick}
            onClick={handleEditClick}
            className="material-icons-outlined"
          >
            edit
          </span>
        </span>
      </InputContainer>
      {passwordConfirm && (
        <InputContainer
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          exit={{ y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <label>
            Confirmar Senha
          </label>
          <span className="input">
            <input
              type="text"
            />
          </span>
        </InputContainer>
      )}
    </AnimatePresence>
  );
}

function Input({ label, value }) {
  const [disabled, setdisabled] = useState(true);
  const input = useRef(null);

  const handleEditClick = () => {
    setdisabled(!disabled);
  };

  useEffect(() => {
    if (!disabled) {
      input.current.focus();
    }
  }, [disabled]);

  return (
    <InputContainer>
      <label>
        {label}
      </label>
      <span className="input">
        <input
          onBlur={() => setdisabled(true)}
          ref={input}
          type="text"
          value={value}
          disabled={disabled}
        />
        <span
          tabIndex={0}
          role="button"
          onKeyUp={handleEditClick}
          onClick={handleEditClick}
          className="material-icons-outlined"
        >
          edit
        </span>
      </span>
    </InputContainer>
  );
}
