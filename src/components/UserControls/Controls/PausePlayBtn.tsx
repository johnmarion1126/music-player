import React from 'react';

import PauseImg from '../../../assets/pause.png';

import Icon from './Icon';

const PausePlayBtn: React.FC = () => (
  <Icon
    imgSrc={PauseImg}
    desc="Pause Icon Button"
  />
);

export default PausePlayBtn;
