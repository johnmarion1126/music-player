import React, { useState } from 'react';

import PauseImg from '../../../assets/pause.png';
import PlayImg from '../../../assets/play.png';

import Icon from '../Icon';

import { useAppDispatch } from '../../../app/hook';
import { pausePlay } from '../../../features/songSlice';

const PausePlayBtn: React.FC = () => {
  const [isPause, setIsPaused] = useState(true);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setIsPaused(!isPause);
    dispatch(pausePlay());
  };

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
