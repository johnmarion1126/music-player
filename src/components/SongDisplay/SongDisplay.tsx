import React from 'react';

import SongImg from './SongImg';
import SongTitle from './SongTitle';

const SongDispaly: React.FC = () => (
  <div className="h-[80%] flex flex-col justify-center items-center">
    <SongImg />
    <SongTitle />
  </div>
);

export default SongDispaly;
