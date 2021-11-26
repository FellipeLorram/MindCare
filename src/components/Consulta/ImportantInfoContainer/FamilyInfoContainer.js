import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {
  MeddiumButton,
  ModalFooter,
  ModalHeader,
  SmallButton,
} from '../../../styles/GlobalStyles';
import {
  AddPeopleContainer,
  Container, ImportantPeopleContainer, OptionsArrow, OptionsContainer,
} from './styled';

export default function PeopleInfo({ Data }) {
  const familyOptions = ['Mãe', 'Pai', 'Irmão', 'Tia/Tio', 'Primos', 'Avôs', 'Avós', 'Outros'];
  const friendsOptions = ['Amigo', 'Conhecido', 'Outros'];
  const otherPeopleOtions = ['Conhecido'];
  return (
    <Container>
      <ImportantPeople options={familyOptions} peopleArr={Data.familiares} headerText="Familiares" />
      <ImportantPeople options={friendsOptions} peopleArr={Data.amigosEConhecidos} headerText="Amigos" />
      <ImportantPeople options={otherPeopleOtions} peopleArr={Data.outrasPessoas} headerText="Outras pessoas" />
    </Container>
  );
}

function ImportantPeople({ headerText, peopleArr, options }) {
  const [dataPeople, setDataPeople] = useState(peopleArr);
  const [open, setOpen] = useState(false);
  return (
    <ImportantPeopleContainer>
      <AddPeople
        options={options}
        headerText={headerText}
        setOpen={setOpen}
        open={open}
        setDataPeople={setDataPeople}
      />
      <div className="header">
        {headerText}
        <SmallButton
          onClick={() => setOpen(true)}
        >
          <span className="material-icons-outlined">
            add
          </span>
        </SmallButton>
      </div>
      <div className="body">
        {dataPeople.map(people => (
          <div key={people[0]} className="content">
            <span>{people[1]}</span>
            <span className="content--people">
              (
              {people[0]}
              )
            </span>
          </div>
        ))}
      </div>
    </ImportantPeopleContainer>
  );
}

function AddPeople({
  open,
  setOpen,
  headerText,
  options,
  setDataPeople,
}) {
  const [selected, setSelected] = useState('');
  const [Input, setInput] = useState('');
  const handleCloseClick = () => {
    setOpen(false);
  };
  const handleAddClick = () => {
    if (Input.length < 2 || !selected) return;
    setDataPeople(arr => [...arr, [selected, Input]]);
    setOpen(false);
  };
  const handleChangeInput = (text) => {
    setInput(text);
  };
  return (
    <AnimatePresence>
      {open && (
        <AddPeopleContainer
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <ModalHeader>
            <span>{headerText}</span>
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
          <div className="add--people--body">
            <input onChange={(e) => handleChangeInput(e.target.value)} type="text" />
            <Options
              selected={selected}
              setSelected={setSelected}
              setDataPeople={setDataPeople}
              options={options}
            />
          </div>
          <ModalFooter>
            <MeddiumButton onClick={handleAddClick}>Adicionar</MeddiumButton>
          </ModalFooter>
        </AddPeopleContainer>
      )}
    </AnimatePresence>
  );
}

function Options({ options, selected, setSelected }) {
  const [showOptions, setshowOptions] = useState(false);
  const handleClick = () => setshowOptions(!showOptions);
  const handleClickOption = (text) => setSelected(text);

  useEffect(() => {
    if (options.length === 1) setSelected(options[0]);
    return () => {
      setSelected('');
    };
  }, [options]);

  return (
    <AnimatePresence>
      <OptionsArrow
        tabIndex={0}
        role="button"
        onKeyUp={handleClick}
        onClick={handleClick}
      >
        {!selected
          ? <span className="material-icons-outlined">expand_more</span>
          : <span>{selected}</span>}
        {showOptions && (
          <OptionsContainer
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              y: 0,
              opacity: 1,
              x: 60,
            }}
            exit={{ scale: 0, y: 100 }}
          >
            {options.map(op => (
              <div
                key={op}
                tabIndex={0}
                role="button"
                onKeyUp={() => handleClickOption(op)}
                onClick={() => handleClickOption(op)}
                className="option"
              >
                {op}
              </div>
            ))}
          </OptionsContainer>
        )}
      </OptionsArrow>

    </AnimatePresence>
  );
}
