import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PinDetail from '../pages/pinDetail';
import Feed from '../pages/feed';
import CreatePin from '../pages/createPin';
import Navbar from '../components/navbar';
import { SearchContextProvider } from '../context/searchContext';
import Category from '../pages/category';
const PinsRoutes = () => {
  return (
    <SearchContextProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/pin/:pinId" element={<PinDetail />} />
        <Route path="/create-pin" element={<CreatePin />} />
        {/* <Route path="/search" element={<Search />} /> */}
      </Routes>
    </SearchContextProvider>
  );
};

export default PinsRoutes;
