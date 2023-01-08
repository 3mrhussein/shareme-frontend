import React from 'react';
import MasonryLayout from '../container/masonryLayout';
import useRelated from '../hooks/useRelatedPins';
import Spinner from './spinner';

const MoreRelatedPins = ({ pin }) => {
  const { relatedPins } = useRelated(pin);

  return (
    <>
      <h2 className="text-center font-bold text-2xl mt-8 mb-4">More like this</h2>
      <Spinner isLoading={relatedPins.isLoading} message="Loading more pins...">
        {relatedPins.error ? (
          <span className="m-auto flex-center">{relatedPins.error}</span>
        ) : relatedPins.data.length ? (
          <MasonryLayout pins={relatedPins.data} />
        ) : (
          <div className="m-auto flex-center text-lg my-20">No pins available!</div>
        )}
      </Spinner>
    </>
  );
};

export default MoreRelatedPins;
