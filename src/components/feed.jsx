import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllPins, searchPins } from '../Utils/APIs/pinsAPI';
import MasonryLayout from './masonryLayout';
import Spinner from './spinner';

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      searchPins(categoryId).then((data) => {
        setPins(data);
        setIsLoading(false);
      });
    } else {
      getAllPins().then((data) => {
        setPins(data);

        setIsLoading(false);
      });
    }
  }, [categoryId]);

  return (
    <Spinner
      isLoading={isLoading}
      message="We are adding new ideas to your feed!"
    >
      {pins?.length ? (
        <MasonryLayout pins={pins} />
      ) : (
        <div className="w-full h-full flex justify-center items-center ">
          No pins available!
        </div>
      )}
    </Spinner>
  );
};

export default Feed;
