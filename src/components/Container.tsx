import React from 'react';

import Song from './Song';
import SongDispaly from './SongDisplay/SongDisplay';
import UserControls from './UserControls/UserControls';

const Container: React.FC = () => (
  <section className="w-[350px] h-[450px] bg-gray-900 text-white font-RedHat drop-shadow-2xl">
    <SongDispaly />
    <UserControls />
    <Song />
  </section>
);

export default Container;
