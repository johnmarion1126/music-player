import React from 'react';

import { useAppSelector } from '../app/hook';

const Sound = require('react-sound').default;
const test = require('../assets/test.mp3');

const Song: React.FC = () => {
  const isPause = useAppSelector((state) => state.song.isPause);

  return (
    <Sound
      url={test}
      playStatus={isPause ? Sound.status.PAUSE : Sound.status.PLAYING}
      onLoading={() => { console.log('LOADING'); }}
      onPlaying={() => { console.log('PLAYING'); }}
      onFinishedPlaying={() => { console.log('FINISHED'); }}
      volume={100}
    />
  );
};

export default Song;
