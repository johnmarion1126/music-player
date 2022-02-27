import React from 'react';

// FOR TESTING STYLING
import RecordImg from '../../assets/record.jpg';

const SongImg: React.FC = () => (
  <img
    src={RecordImg}
    alt="A 45 record"
    className="w-[70%]"
  />
);

export default SongImg;
