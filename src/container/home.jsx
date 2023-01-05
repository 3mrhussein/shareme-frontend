import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import UserProfile from '../pages/userProfile';
import { useNavigate } from 'react-router-dom';
import { SideBarContextProvider } from '../context/sideBarContext';
import Pins from './pins';
import Sidebar from './sidebar';
import { Routes, Route } from 'react-router-dom';

const Home = () => {
  const { user, userIsLoaded } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user && userIsLoaded) navigate('/login', { replace: true });
  }, [user, userIsLoaded, navigate]);
  return (
    user &&
    userIsLoaded && (
      <div className="flex bg-gray-50 md:flex-row flex-col transition-height duration-75 ease-in-out ">
        <SideBarContextProvider>
          <Sidebar />
        </SideBarContextProvider>
        <div className="mt-12 md:mt-0 w-full">
          <Routes>
            <Route path="/user-profile/:userId" element={<UserProfile />} />
            <Route path="/*" element={<Pins />} />
          </Routes>
        </div>
      </div>
    )
  );
};

export default Home;
