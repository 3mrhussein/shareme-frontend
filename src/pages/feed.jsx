import React from 'react';
import MasonryLayout from '../container/masonryLayout';
import Spinner from '../components/spinner';
import { useContext } from 'react';
import { PinContext } from '../context/pinContext';

const Feed = () => {
  const {
    pins: { data, error, isLoading },
  } = useContext(PinContext);
  return (
    <Spinner isLoading={isLoading} message="We are adding new ideas to your feed!">
      {error ? (
        <span className="m-auto flex justify-center items-center ">{error}</span>
      ) : data.length ? (
        <MasonryLayout pins={data} />
      ) : (
        <div className="m-auto flex justify-center items-center ">No pins available!</div>
      )}
    </Spinner>
  );
};

export default Feed;
