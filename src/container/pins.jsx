import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PinDetail from '../pages/pinDetail';
import Feed from '../pages/feed';
import CreatePin from '../pages/createPin';
import Search from '../pages/search';
import Navbar from '../components/navbar';
import { SearchContextProvider } from '../context/searchContext';
const Pins = () => {
  return (
    <SearchContextProvider>
      <div className=" px-2 flex flex-col md:px-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route path="/pin-detail/:pinId" element={<PinDetail />} />
          <Route path="/create-pin" element={<CreatePin />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </SearchContextProvider>
  );
};

export default Pins;
