import React, { useState } from 'react';
import {
  Container,
} from './styled';
import Notes from '../SeeMore/NotesAndActivities/Notes/Notes';
import Activities from '../SeeMore/NotesAndActivities/Activities/Activities';
import PeopleInfo from './ImportantInfoContainer/FamilyInfoContainer';
import PersonalInfo from './ImportantInfoContainer/PersonalInfo';
import Timer from './Timer/Timer';

const Data = {
  nome: 'Fellipe Lorram',
  idade: 21,
  endereco: '',
  telefone: '',
  sexo: '',
  dataDeNascimento: '',
  naturalidade: '',
  estadoCivil: '',
  maisCampos: [],
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
    ['Conhecido', 'Léo'],
  ],
};

export default function ConsultaContainer() {
  return (
    <Container
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.2,
        damping: 1,
        stiffness: 120,
      }}
    >
      <PeopleInfo Data={Data} />
      <div className="notes--activities--container">
        <Notes smallGrid />
        <Activities smallGrid />
      </div>
      <Timer />
    </Container>
  );
}
