import song1Cover from '../assets/covers/he_went_away.png';
import song2Cover from '../assets/covers/always_so_true.png';

import SongIF from './songIF';

const song1 = require('../assets/music/he_went_away.mp3');
const song2 = require('../assets/music/always_so_true.mp3');

const songs: SongIF[] = [
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

export default songs;
