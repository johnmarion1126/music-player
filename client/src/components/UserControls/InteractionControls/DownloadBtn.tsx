import React from 'react';
import { saveAs } from 'file-saver';

import DownloadImg from '../../../assets/images/download.png';
import Icon from '../Icon';

import { useAppSelector } from '../../../app/hook';

const DownloadBtn: React.FC = () => {
  const [sound, name] = useAppSelector((state) => [state.song.sound, state.song.name]);

  const saveFile = () => {
    saveAs(
      sound,
      `${name}.mp3`,
    );
  };

  return (

    <button
      className="w-[50%] flex justify-center border-t-2 border-slate-600 p-3 hover:cursor-pointer"
      type="button"
      onClick={saveFile}
    >
      <Icon
        imgSrc={DownloadImg}
        desc="Download Icon"
      />
    </button>
  );
};

export default DownloadBtn;
