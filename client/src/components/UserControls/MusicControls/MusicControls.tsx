import React from 'react';

import ForwardBtn from './ForwardBtn';
import PausePlayBtn from './PausePlayBtn';
import RewindBtn from './RewindBtn';

const MusicControls: React.FC = () => (
  <div className="flex flex-row justify-center gap-4">
    <RewindBtn />
    <PausePlayBtn />
    <ForwardBtn />
  </div>
);

export default MusicControls;
