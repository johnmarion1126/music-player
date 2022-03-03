import React from 'react';

// FOR TESTING
import RecordImg from '../../assets/images/record.jpg';

const SongImg: React.FC = () => (
  <img
    src={RecordImg}
    alt="A 45 record"
    className="w-[70%] bg-gray-800 rounded-2xl drop-shadow-2xl"
  />
);

export default SongImg;
