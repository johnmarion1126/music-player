import React from 'react';

import { useAppSelector } from '../../app/hook';

const SongTitle: React.FC = () => {
  const [name, artist] = useAppSelector((state) => [state.song.name, state.song.artist]);

  return (

    <>
      <h1 className="mt-4 font-bold">
        {name}
      </h1>
      <h3 className="font-semibold text-sm text-slate-400">
        {artist}
      </h3>
    </>
  );
};

export default SongTitle;
