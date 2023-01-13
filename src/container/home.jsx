import UserProfile from '../pages/userProfile';
import PinsRoutes from '../pages/routes';
import Sidebar from './sidebar';
import { Routes, Route } from 'react-router-dom';
import { PinContextProvider } from '../context/pinContext';

import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-50 ">
      <Sidebar />
      <div className="w-full max-h-screen">
        <Navbar />
        <div className="relative overflow-scroll top-14 md:top-0 bottom-0 right-0 left-0 w-full">
          <PinContextProvider>
            <Routes>
              <Route path="/user-profile/:userId" element={<UserProfile />} />
              <Route path="/*" element={<PinsRoutes />} />
            </Routes>
          </PinContextProvider>
        </div>
      </div>
    </div>
  );
};

export default Home;
