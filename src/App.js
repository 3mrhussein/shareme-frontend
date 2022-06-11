import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './container/login';
import Home from './container/home';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { UserContextProvider } from './context/userContext';
const App = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
        scoop: '',
      });
    }
  }, []);
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </UserContextProvider>
  );
};

export default App;
