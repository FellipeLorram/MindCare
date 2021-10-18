import React, { createContext, useContext, useState } from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import AppContext, { GlobalContext } from './contexts/App';

import './app.css';

export default function App() {
  return (
    <AppContext>
      <AppWrapper>
        <AppContent />
      </AppWrapper>
    </AppContext>
  );
}

function AppWrapper({ children }) {
  return (
    <>
      {children}
    </>
  );
}

function AppContent() {
  const bodyContext = useContext(GlobalContext);

  return (
    <Router history={history}>
      <GlobalStyles theme={bodyContext.Theme} bodyBlock={bodyContext.bodyBlock} />
      <Routes />
    </Router>
  );
}
