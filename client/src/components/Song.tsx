import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../app/hook';
import { setSong, skipToNext } from '../features/songSlice';

import song1Cover from '../assets/covers/he_went_away.png';
import song2Cover from '../assets/covers/always_so_true.png';

const Sound = require('react-sound').default;

const song1 = require('../assets/music/he_went_away.mp3');
const song2 = require('../assets/music/always_so_true.mp3');

const songs = [
  {
    name: 'He Went Away',
    artist: 'April, May, and June',
    sound: song1,
    cover: song1Cover,
    index: 0,
  },
  {
    name: 'Always So True',
    artist: 'Gary Glenn and the Jewel Tones',
    sound: song2,
    cover: song2Cover,
    index: 1,
  },
];

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
