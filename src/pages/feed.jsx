import React, { useEffect } from 'react';
import MasonryLayout from '../container/masonryLayout';
import { useContext } from 'react';
import { PinContext } from '../context/pinContext';
import { LoadingContext } from '../context/loadingContext';

const Feed = () => {
  const { setPageLoading } = useContext(LoadingContext);
  const {
    pins: { data, error, isLoading },
  } = useContext(PinContext);
  useEffect(() => {
    setPageLoading((prev) => ({
      ...prev,
      loading: isLoading,
      loadingMsg: 'We are adding new ideas to your feed!',
      bgOpacity: 1,
    }));
  }, [setPageLoading, isLoading]);
  return (
    <>
      {error ? (
        <span className="m-auto flex-center">{error}</span>
      ) : data.length ? (
        <MasonryLayout pins={data} />
      ) : (
        <div className="m-auto flex-center ">No pins available!</div>
      )}
    </>
  );
};

export default Feed;
