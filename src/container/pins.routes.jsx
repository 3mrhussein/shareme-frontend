import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PinDetail from '../pages/pinDetail';
import Feed from '../pages/feed';
import CreatePin from '../pages/createPin';
import { SearchContextProvider } from '../context/searchContext';
import Category from '../pages/category';
import Search from '../components/Search';
const PinsRoutes = () => {
  return (
    <SearchContextProvider>
      <Search />
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
