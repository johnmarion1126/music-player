import React from 'react';

import PauseImg from '../../../assets/images/pause.png';
import PlayImg from '../../../assets/images/play.png';

import Icon from '../Icon';

import { useAppSelector, useAppDispatch } from '../../../app/hook';
import { pausePlay } from '../../../features/songSlice';

const PausePlayBtn: React.FC = () => {
  const isPause = useAppSelector((state) => state.song.isPause);
  const dispatch = useAppDispatch();

  const handleClick = () => {
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
            imgSrc={PlayImg}
            desc="Play Icon"
          />
        )
        : (
          <Icon
            imgSrc={PauseImg}
            desc="Pause Icon"
          />
        )}
    </button>
  );
};

export default PausePlayBtn;
