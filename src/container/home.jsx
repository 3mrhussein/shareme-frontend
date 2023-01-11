import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import UserProfile from '../pages/userProfile';
import { useNavigate } from 'react-router-dom';
import PinsRoutes from '../pages/routes';
import Sidebar from './sidebar';
import { Routes, Route } from 'react-router-dom';
import { PinContextProvider } from '../context/pinContext';

import Navbar from '../components/Navbar';

const Home = () => {
  const { user, userIsLoaded } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && userIsLoaded) navigate('/login', { replace: true });
  }, [user, userIsLoaded, navigate]);
  return (
    user &&
    userIsLoaded && (
      <div className="flex h-screen bg-gray-50 ">
        <Sidebar />
        <div className="flex-center flex-col w-full max-h-screen">
          <Navbar />
          <div className="relative overflow-scroll bottom-0 right-0 left-0 md:left-auto grow w-full">
            <PinContextProvider>
              <Routes>
                <Route path="/user-profile/:userId" element={<UserProfile />} />
                <Route path="/*" element={<PinsRoutes />} />
              </Routes>
            </PinContextProvider>
          </div>
        </div>
      </div>
    )
  );
};

export default Home;
