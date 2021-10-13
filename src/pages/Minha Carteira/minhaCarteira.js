import React from 'react';
import Main from '../../components/Main/Main';

export default function MeuPerfil() {
  return (
    <Main topReference={window.innerWidth > 768 ? 'Minha Carteira' : 'Carteira'} />
  );
}
