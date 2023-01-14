import MasonryLayout from '../container/masonryLayout';
import { useContext } from 'react';
import { PinContext } from '../context/pinContext';
import useLoading from '../hooks/useLoading';

const Feed = () => {
  const {
    pins: { data, error, isLoading },
  } = useContext(PinContext);
  useLoading(isLoading, 'We are adding new ideas to your feed!', 1);
  return (
    !isLoading && (
      <>
        {error ? (
          <span className="min-h-400 flex-center text-center font-bold">{error}</span>
        ) : data.length ? (
          <MasonryLayout pins={data} />
        ) : (
          <div className="m-auto flex-center ">No pins available!</div>
        )}
      </>
    )
  );
};

export default Feed;
