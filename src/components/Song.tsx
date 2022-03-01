import React from 'react';

const Sound = require('react-sound').default;
const test = require('../assets/test.mp3');

const Song: React.FC = () => {
  console.log('Hello World');

  return (
    <Sound
      url={test}
      playStatus={Sound.status.PLAYING}
      playFromPosition={300}
      onLoading={() => { console.log('LOADING'); }}
      onPlaying={() => { console.log('PLAYING'); }}
      onFinishedPlaying={() => { console.log('FINISHED'); }}
      volume={100}
    />
  );
};

export default Song;
