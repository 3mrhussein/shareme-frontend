import React from 'react';

import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { UserContextProvider } from './context/userContext';
import { LoadingContextProvider } from './context/loadingContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <LoadingContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </LoadingContextProvider>
  </Router>
);
