import React, { useState } from 'react';

import PauseImg from '../../../../assets/pause.png';
import PlayImg from '../../../../assets/play.png';

import Icon from '../Icon';

const PausePlayBtn: React.FC = () => {
  const [isPause, setIsPaused] = useState(true);

  const handleClick = () => setIsPaused(!isPause);

  return (
    <button
      onClick={handleClick}
      type="button"
    >
      { isPause
        ? (
          <Icon
            imgSrc={PauseImg}
            desc="Pause Icon"
          />
        )
        : (
          <Icon
            imgSrc={PlayImg}
            desc="Play Icon"
          />
        )}
    </button>
  );
};

export default PausePlayBtn;
