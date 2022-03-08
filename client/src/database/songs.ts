import song1Cover from '../assets/covers/he_went_away.png';
import song2Cover from '../assets/covers/always_so_true.png';
import song3Cover from '../assets/covers/hey_boy.png';
import song4Cover from '../assets/covers/i_dont_wanna_cry.png';
import song5Cover from '../assets/covers/echo.png';

import SongIF from './songIF';

const song1 = require('../assets/music/he_went_away.mp3');
const song2 = require('../assets/music/always_so_true.mp3');
const song3 = require('../assets/music/hey_boy.mp3');
const song4 = require('../assets/music/i_dont_wanna_cry.mp3');
const song5 = require('../assets/music/echo.mp3');

const songs: SongIF[] = [
  {
    name: 'Hey Boy (I Love You)',
    artist: 'Cynthia & The Imaginations',
    sound: song3,
    cover: song3Cover,
    index: 0,
  },
  {
    name: 'He Went Away',
    artist: 'April, May, and June',
    sound: song1,
    cover: song1Cover,
    index: 1,
  },
  {
    name: "I Don't Wanna Cry",
    artist: 'The After Hours',
    sound: song4,
    cover: song4Cover,
    index: 2,
  },
  {
    name: 'Echo',
    artist: 'Brenda Holloway',
    sound: song5,
    cover: song5Cover,
    index: 3,
  },
  {
    name: 'Always So True',
    artist: 'Gary Glenn and the Jewel Tones',
    sound: song2,
    cover: song2Cover,
    index: 4,
  },
];

export default songs;
