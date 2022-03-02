import React from 'react';

import InteractionControls from './InteractionControls/InteractionControls';
import MusicControls from './MusicControls/MusicControls';

const UserControls: React.FC = () => (
  <section className="flex flex-col w-full absolute bottom-0">
    <MusicControls />
    <InteractionControls />
  </section>
);

export default UserControls;
