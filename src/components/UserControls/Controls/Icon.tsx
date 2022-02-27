import React from 'react';

interface IconType {
    imgSrc: string,
    desc: string
}

const Icon: React.FC<IconType> = ({ imgSrc, desc }) => (
  <img
    src={imgSrc}
    alt={desc}
    className="w-8"
  />
);

export default Icon;
