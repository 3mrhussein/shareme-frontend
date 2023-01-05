import React from 'react';
import Masonry from 'react-masonry-css';
import Pin from './Pin/pin';

const breakPointsObj = {
  default: 4,
  4500: 9,
  4000: 8,
  3500: 7,
  3000: 6,
  1536: 5,
  1280: 4,
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
