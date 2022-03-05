import React from 'react';

import { useAppSelector, useAppDispatch } from '../app/hook';
import { skipToNext } from '../features/songSlice';
import songs from '../database/songs';

const Sound = require('react-sound').default;

const Song: React.FC = () => {
  const [song, index] = useAppSelector((state) => [state.song.sound, state.song.index]);
  const isPause = useAppSelector((state) => state.song.isPause);

  const dispatch = useAppDispatch();

  const handleFinish = () => {
    if ((index + 1) !== songs.length) {
      dispatch(skipToNext());
    }
  };

  return (
    <Sound
      url={song}
      playStatus={isPause ? Sound.status.PAUSE : Sound.status.PLAYING}
      onFinishedPlaying={handleFinish}
      volume={100}
    />
  );
};

export default Song;
