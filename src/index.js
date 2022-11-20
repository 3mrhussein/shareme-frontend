import React from 'react';

import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { UserContextProvider } from './context/userContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </Router>
);
