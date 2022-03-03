import React, { useState } from 'react';

import HeartImg from '../../../assets/images/heart-open.png';
import RedHeartImg from '../../../assets/images/heart-red.png';

import Icon from '../Icon';

const HeartBtn: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => setIsLiked(!isLiked);

  return (
    <button
      onClick={handleClick}
      type="button"
      className="w-[50%] flex justify-center border-t-2 border-l-2 p-3 border-slate-600"
    >
      {isLiked
        ? (
          <Icon
            imgSrc={RedHeartImg}
            desc="Filled Heart Icon"
          />
        )
        : (
          <Icon
            imgSrc={HeartImg}
            desc="Unfilled Heart Icon"
          />
        )}
    </button>
  );
};

export default HeartBtn;
