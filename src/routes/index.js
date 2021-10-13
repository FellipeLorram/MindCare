import React from 'react';
import { Switch } from 'react-router-dom';
import MyRoute from './MyRoute';
import Login from '../pages/Login/login';
import CentralDeControle from '../pages/Central de Controle/CentralDeControle';
import Pacientes from '../pages/Pacientes/Pacientes';
import MeusHorarios from '../pages/Meus Horarios/MeusHorarios';
import MeuPerfil from '../pages/Meu Perfil/meuPefil';
import novoPaciente from '../pages/Novo Paciente/novoPaciente';
import page404 from '../pages/Page404/page404';
import minhaCarteira from '../pages/Minha Carteira/minhaCarteira';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={CentralDeControle} isClosed />
      <MyRoute exact path="/login" component={Login} isClosed />
      <MyRoute exact path="/pacientes" component={Pacientes} isClosed />
      <MyRoute exact path="/meus-horarios" component={MeusHorarios} isClosed />
      <MyRoute exact path="/configs" component={MeuPerfil} isClosed />
      <MyRoute exact path="/novo-paciente" component={novoPaciente} isClosed />
      <MyRoute exact path="/minha-carteira" component={minhaCarteira} isClosed />
    </Switch>
  );
}
