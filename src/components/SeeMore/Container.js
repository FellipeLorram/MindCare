import React, { useState } from 'react';
import {
  Container,
} from './styled';
import { PersonalInfosContainer } from './PersonalInfosContainer';
import FriendsAndFamily from './FriendsAndFamilyContainer';
import { AppoitmentsAndPaymentsContainer } from './AppoitmentsAndPaymentsContainer';
import ModalEditAppoitmentsDay from './Modals/ModalEditAppoitmentsDay';
import ModalEditAppoitmentsPay from './Modals/ModalEditAppoitmentsPay';
import NotesAndActivities from './NotesAndActivities/NotesAndActivities';

const Data = {
  nome: 'Fellipe Lorram',
  idade: 21,
  endereco: '',
  telefone: '',
  sexo: '',
  dataDeNascimento: '',
  naturalidade: '',
  estadoCivil: '',

  familiares: [
    ['Mãe', 'Maria'],
    ['Pai', 'Peterson'],
    ['Irmãos', 'Nicolas, Rafael'],
    ['Esposa', 'Beatriz'],
  ],
  amigosEConhecidos: [
    ['Amigo', 'Deivisom'],
  ],
  outrasPessoas: [
    ['Léo'],
  ],
};

export default function SeeMoreContainer() {
  const [showModalAppoitments, setShowModalAppoiments] = useState(false);
  const [showModalPayments, setShowModalPayments] = useState(false);

  return (
    <>
      <ModalEditAppoitmentsDay
        showModal={showModalAppoitments}
        setShowModal={setShowModalAppoiments}
      />
      <ModalEditAppoitmentsPay
        showModal={showModalPayments}
        setShowModal={setShowModalPayments}
      />
      <Container
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.2,
          damping: 1,
          stiffness: 120,
        }}
      >
        <PersonalInfosContainer />
        <AppoitmentsAndPaymentsContainer
          setShowModalPayments={setShowModalPayments}
          setShowModalAppoiments={setShowModalAppoiments}
        />
        <FriendsAndFamily
          family={Data.familiares}
          friends={Data.amigosEConhecidos}
          others={Data.outrasPessoas}
        />
        <NotesAndActivities />
      </Container>
    </>
  );
}
