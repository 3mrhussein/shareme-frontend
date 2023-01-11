import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import UserProfile from '../pages/userProfile';
import { useNavigate } from 'react-router-dom';
import PinsRoutes from './pins.routes';
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
      <div className="flex h-screen overflow-hidden bg-gray-50 ">
        <Sidebar />
        <div className="w-full max-h-screen">
          <Navbar />
          <div className=" overflow-scroll h-full">
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
