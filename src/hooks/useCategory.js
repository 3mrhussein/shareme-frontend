import { useState } from 'react';
import { useEffect } from 'react';
import { categories } from '../APIs/data';

const useCategory = (pins, category) => {
  const [filteredPins, setFilteredPins] = useState([]);
  useEffect(() => {
    if (!category || !pins || !categories.find((item) => item.name === category)) return;
    const filteredPins = pins?.filter((pin) => pin.category === category);
    setFilteredPins(filteredPins);
  }, [pins, category]);
  return filteredPins;
};

export default useCategory;
