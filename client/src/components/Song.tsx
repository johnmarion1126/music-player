import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../app/hook';
import { setSong, skipToNext } from '../features/songSlice';
import songs from '../database/songs';

const Sound = require('react-sound').default;

const Song: React.FC = () => {
  const [currentSong, index] = useAppSelector((state) => [state.song.sound, state.song.index]);
  const isPause = useAppSelector((state) => state.song.isPause);

  const dispatch = useAppDispatch();

  const handleFinish = () => {
    if ((index + 1) !== songs.length) dispatch(skipToNext);
  };

  useEffect(() => {
    dispatch(setSong(songs[index]));
  }, [index]);

  return (
    <Sound
      url={currentSong}
      playStatus={isPause ? Sound.status.PAUSE : Sound.status.PLAYING}
      onFinishedPlaying={handleFinish}
      volume={100}
    />
  );
};

export default Song;
