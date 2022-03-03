import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../app/hook';
import { setSong } from '../features/songSlice';

import song1Cover from '../assets/covers/he_went_away.png';
import song2Cover from '../assets/covers/always_so_true.png';

const Sound = require('react-sound').default;

const song1 = require('../assets/music/he_went_away.mp3');
const song2 = require('../assets/music/always_so_true.mp3');

// TODO: Allow downloads
// TODO: Forward button skips to next song
// TODO: Backward button rewinds song
// TODO: Backward button goes to previous song if position of song is below a certain threshold

const songs = [
  {
    name: 'He Went Away',
    artist: 'April, May, and June',
    sound: song1,
    cover: song1Cover,
  },
  {
    name: 'Always So True',
    artist: 'Gary Glenn and the Jewel Tones',
    sound: song2,
    cover: song2Cover,
  },
];

const Song: React.FC = () => {
  const currentSong = useAppSelector((state) => state.song.song);
  const isPause = useAppSelector((state) => state.song.isPause);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSong(songs[0]));
    console.log(currentSong);
  }, []);

  return (
    <Sound
      url={currentSong || song1}
      playStatus={isPause ? Sound.status.PAUSE : Sound.status.PLAYING}
      onLoading={() => { console.log('LOADING'); }}
      onPlaying={() => { console.log('PLAYING'); }}
      onFinishedPlaying={() => { console.log('FINISHED'); }}
      volume={100}
    />
  );
};

export default Song;
