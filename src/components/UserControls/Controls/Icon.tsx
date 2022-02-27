import React from 'react';

interface IconType {
    imgSrc: string,
    desc: string
}

const Icon: React.FC<IconType> = ({ imgSrc, desc }) => (
  <img
    src={imgSrc}
    alt={desc}
  />
);

export default Icon;
