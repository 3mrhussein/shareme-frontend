import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PinDetail from '../components/pinDetail';
import Home from './home';
import Feed from '../components/feed';
import CreatePin from '../components/createPin';
import Search from '../components/search';
import Navbar from '../components/navbar';
import { SearchContextProvider } from '../context/searchContext';
const Pins = () => {
  return (
    <SearchContextProvider>
      <div className=" px-2 flex flex-col md:px-5 w-full">
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
