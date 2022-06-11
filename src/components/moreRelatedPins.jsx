import React from 'react';
import MasonryLayout from './masonryLayout';
import Spinner from './spinner';

const MoreRelatedPins = ({ relatedPins }) => {
  if (relatedPins?.length > 0)
    return (
      <>
        <h2 className="text-center font-bold text-2xl mt-8 mb-4">
          More like this
        </h2>
        <MasonryLayout pins={relatedPins} />
      </>
    );
  else
    return (
      <div className="mt-8">
        <Spinner isLoading={true} message="Loading more pins..." />;
      </div>
    );
};

export default MoreRelatedPins;
