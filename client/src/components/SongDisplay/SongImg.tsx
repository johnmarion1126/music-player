import React from 'react';

import { useAppSelector } from '../../app/hook';

const SongImg: React.FC = () => {
  const imgSrc = useAppSelector((state) => state.song.cover);

  return (

    <img
      src={imgSrc}
      alt="A 45 record"
      className="w-[70%] bg-gray-800 rounded-2xl drop-shadow-2xl"
    />
  );
};

export default SongImg;
