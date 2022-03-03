import React from 'react';

import { useAppSelector } from '../app/hook';

const Sound = require('react-sound').default;
const test = require('../assets/music/he_went_away.mp3');

// TODO: Allow downloads
// TODO: Add a second song
// TODO: Forward button skips to next song
// TODO: Backward button rewinds song
// TODO: Backward button goes to previous song if position of song is below a certain threshold

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
