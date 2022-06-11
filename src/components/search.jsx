import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context/searchContext';
import { getAllPins, searchPins } from '../Utils/APIs/pinsAPI';
import MasonryLayout from './masonryLayout';
import Spinner from './spinner';

const Search = () => {
  const { searchTerm } = useContext(SearchContext);
  const [pins, setPins] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      searchPins(searchTerm.toLowerCase()).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      getAllPins().then((data) => setPins(data));
      setLoading(false);
    }
  }, [searchTerm]);
  return (
    <Spinner isLoading={loading} message={'Searching for pins...'}>
      {pins?.length && !loading ? (
        <MasonryLayout pins={pins} />
      ) : (
        <div className="w-full  h-full flex justify-center items-center">
          No pins related to search
        </div>
      )}
    </Spinner>
  );
};

export default Search;
