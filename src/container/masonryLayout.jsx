import React from 'react';
import Masonry from 'react-masonry-css';
import Pin from '../components/Pin/pin';

const breakPointsObj = {
  default: 1,
  4500: 10,
  3500: 9,
  3000: 8,
  2000: 7,
  1536: 6,
  1280: 5,
  1024: 4,
  768: 2,
  640: 1,
};

const MasonryLayout = ({ pins }) => {
  return (
    <Masonry className="flex px-2 md:px5" breakpointCols={breakPointsObj}>
      {pins?.map((pin) => {
        return <Pin key={pin._id} pin={pin} />;
      })}
    </Masonry>
  );
};

export default MasonryLayout;
