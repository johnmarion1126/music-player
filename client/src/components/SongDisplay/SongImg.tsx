import React from 'react';

// FOR TESTING
import RecordImg from '../../assets/record.jpg';

const SongImg: React.FC = () => (
  <img
    src={RecordImg}
    alt="A 45 record"
    className="w-[70%] bg-gray-800 drop-shadow-2xl"
  />
);

export default SongImg;
