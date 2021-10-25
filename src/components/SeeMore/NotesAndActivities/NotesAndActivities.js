import React, { useEffect, useState } from 'react';
import { ContainerColumn, ContainerRow } from '../styled';
import Activities from './Activities/Activities';
import Notes from './Notes/Notes';

export default function NotesAndActivities() {
  return (
    <ContainerColumn p="0">
      <Notes />
      <Activities />
    </ContainerColumn>
  );
}
