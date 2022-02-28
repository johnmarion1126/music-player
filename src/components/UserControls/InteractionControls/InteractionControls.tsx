import React from 'react';
import DownloadBtn from './DownloadBtn';

import HeartBtn from './HeartBtn';

const InteractionControls: React.FC = () => (
  <div className="flex flex-row justify-around mt-5">
    <DownloadBtn />
    <HeartBtn />
  </div>
);

export default InteractionControls;
