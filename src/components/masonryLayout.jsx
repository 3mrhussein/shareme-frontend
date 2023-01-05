import React from 'react';
import Masonry from 'react-masonry-css';
import Pin from './Pin/pin';

const breakPointsObj = {
  default: 4,
  4500: 10,
  4000: 9,
  3500: 8,
  3000: 7,
  1536: 6,
  1280: 5,
  1024: 3,
  768: 2,
  640: 1,
};

const MasonryLayout = ({ pins }) => {
  return (
    <Masonry className=" flex" breakpointCols={breakPointsObj}>
      {pins?.map((pin) => {
        return <Pin key={pin._id} pin={pin} />;
      })}
    </Masonry>
  );
};

export default MasonryLayout;
