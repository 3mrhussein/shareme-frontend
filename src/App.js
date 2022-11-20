import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './container/login';
import Home from './container/home';
import { UserContext } from './context/userContext';
const App = () => {
  const { user, userIsLoading } = useContext(UserContext);
  //a Variable to to be sure that app are mounted before rendering the login page

  return (
    <>
      <Routes>
        <Route
          exact
          path="/login"
          element={<Login wait={userIsLoading} user={user} />}
        />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
