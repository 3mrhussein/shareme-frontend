import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PinDetail from './pinDetail';
import Feed from './feed';
import CreatePin from './createPin';
import { SearchContextProvider } from '../context/searchContext';
import Category from './category';
import Search from '../components/Search';
import { CreatePinContextProvider } from '../context/createPinContext';
import PageNotFound from './404';
const PinsRoutes = () => {
  return (
    <SearchContextProvider>
      <Search />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/pin/:pinId" element={<PinDetail />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route
          path="/create-pin"
          element={
            <CreatePinContextProvider>
              <CreatePin />
            </CreatePinContextProvider>
          }
        />
        {/* <Route path="/search" element={<Search />} /> */}
      </Routes>
    </SearchContextProvider>
  );
};

export default PinsRoutes;
