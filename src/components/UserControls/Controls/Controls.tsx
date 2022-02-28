import React from 'react';

import PausePlayBtn from './PausePlayBtn';
import ForwardBtn from './ForwardBtn';
import RewindBtn from './RewindBtn';

const Controls: React.FC = () => (
  <div className="flex flex-row gap-4">
    <RewindBtn />
    <PausePlayBtn />
    <ForwardBtn />
  </div>
);

export default Controls;
