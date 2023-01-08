import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './container/home';
import { UserContext } from './context/userContext';
import { SideBarContextProvider } from './context/sideBarContext';
const App = () => {
  const { user, userIsLoading } = useContext(UserContext);
  //a Variable to to be sure that app are mounted before rendering the login page

  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login wait={userIsLoading} user={user} />} />
        <Route
          path="/*"
          element={
            <SideBarContextProvider>
              <Home />
            </SideBarContextProvider>
          }
        />
      </Routes>
    </>
  );
};

export default App;
