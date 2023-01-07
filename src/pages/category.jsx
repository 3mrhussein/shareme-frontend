import React from 'react';
import { useParams } from 'react-router-dom';
import MasonryLayout from '../container/masonryLayout';
import Spinner from '../components/spinner';
import { useContext } from 'react';
import { PinContext } from '../context/pinContext';
import useCategory from '../hooks/useCategory';

const Category = () => {
  const { categoryId } = useParams();
  const {
    pins: { data, isLoading, error },
  } = useContext(PinContext);
  const filteredData = useCategory(data, categoryId);
  return (
    <Spinner isLoading={isLoading} message="We are adding new ideas to your feed!">
      {error ? (
        <span className="min-h-400 flex-center text-center font-bold">{error}</span>
      ) : filteredData.length ? (
        <MasonryLayout pins={filteredData} />
      ) : (
        <div className=" min-h-400 flex-center text-center font-bold">No Pins Found</div>
      )}
    </Spinner>
  );
};

export default Category;
