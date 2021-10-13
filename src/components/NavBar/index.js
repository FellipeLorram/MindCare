import React from 'react';
import PropTypes from 'prop-types';
import { NavBar, Logo } from './styled';
import NavLink from '../NavLink';

export default function Nav({ isActiveNav, topReference }) {
  return (
    <NavBar isActiveNav={isActiveNav}>
      <div className="top">
        <Logo>Nome do Usuario</Logo>
        <NavLink toLink="/" linkText={window.innerWidth > 768 ? 'Central de controle' : 'Central'} linkIcon="dashboard" topReference={topReference} />
        <NavLink toLink="/pacientes" linkText="Pacientes" linkIcon="groups" topReference={topReference} />
        <NavLink toLink="/meus-horarios" linkText={window.innerWidth > 768 ? 'Meus horários' : 'Horários'} linkIcon="today" topReference={topReference} />
        <NavLink toLink="/minha-carteira" linkText={window.innerWidth > 768 ? 'Minha Carteira' : 'Carteira'} linkIcon="account_balance_wallet" topReference={topReference} />
      </div>
      <div className="config">
        <NavLink toLink="/configs" linkText="Configurações" linkIcon="settings" topReference={topReference} />
      </div>
    </NavBar>
  );
}

Nav.propTypes = {
  isActiveNav: PropTypes.bool.isRequired,
};
