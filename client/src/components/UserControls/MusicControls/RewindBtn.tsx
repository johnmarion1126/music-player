import React from 'react';

import RewindImg from '../../../assets/images/rewind.png';

import { useAppDispatch } from '../../../app/hook';
import { rewindToPrev } from '../../../features/songSlice';

import Icon from '../Icon';

const RewindBtn: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(rewindToPrev());
  };

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      <Icon
        imgSrc={RewindImg}
        desc="Rewind Icon"
      />
    </button>
  );
};

export default RewindBtn;
