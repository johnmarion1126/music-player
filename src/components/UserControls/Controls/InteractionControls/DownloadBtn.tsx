import React from 'react';

import DownloadImg from '../../../../assets/download.png';
import Icon from '../Icon';

const DownloadBtn: React.FC = () => (
  <span className="w-[50%] flex justify-center border-t-2 border-slate-600 p-3">
    <Icon
      imgSrc={DownloadImg}
      desc="Download Icon"
    />
  </span>
);

export default DownloadBtn;
