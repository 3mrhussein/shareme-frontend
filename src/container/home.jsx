import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import UserProfile from '../pages/userProfile';
import { useNavigate } from 'react-router-dom';
import PinsRoutes from './pins.routes';
import Sidebar from './sidebar';
import { Routes, Route } from 'react-router-dom';
import { PinContextProvider } from '../context/pinContext';

import Navbar from '../components/navbar';

const Home = () => {
  const { user, userIsLoaded } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && userIsLoaded) navigate('/login', { replace: true });
  }, [user, userIsLoaded, navigate]);
  return (
    user &&
    userIsLoaded && (
      <div className="flex min-h-screen bg-gray-50 ">
        <Sidebar />
        <div className="w-full min-h-screen flex flex-col ">
          <Navbar />
          <div className="mt-14 md:mt-0">
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
