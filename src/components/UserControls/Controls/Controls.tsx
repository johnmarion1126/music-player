import React from 'react';

import InteractionControls from './InteractionControls/InteractionControls';
import MusicControls from './MusicControls/MusicControls';

const Controls: React.FC = () => (
  <section className="flex flex-col w-full">
    <MusicControls />
    <InteractionControls />
  </section>
);

export default Controls;
