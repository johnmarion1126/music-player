import React from 'react';

import ForwardImg from '../../../assets/images/forward.png';

import { useAppDispatch } from '../../../app/hook';
import { skipToNext } from '../../../features/songSlice';

import Icon from '../Icon';

const ForwardBtn: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(skipToNext());
  };

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      <Icon
        imgSrc={ForwardImg}
        desc="Forward Icon"
      />
    </button>
  );
};

export default ForwardBtn;
