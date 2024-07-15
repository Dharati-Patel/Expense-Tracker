import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './GlobalContext';

const GlobalContextWrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        {children}
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default GlobalContextWrapper;