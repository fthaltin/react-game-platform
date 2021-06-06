import React from 'react';
import '../../assets/scss/icon.scss';
import arrowUp from '../../assets/img/icons/arrow-up.svg';
import arrowDown from '../../assets/img/icons/arrow-down.svg';
import search from '../../assets/img/icons/search.svg';

const images = {
  arrowUp,
  arrowDown,
  search,
};

type IconName = 'arrowUp' | 'arrowDown' | 'search';

interface IIcon {
  name: IconName;
}

export default function Icon({ name }:IIcon) {
  function getImageByKey(key: IconName) {
    return images[key];
  }

  return (
    <div className="icon-container">
      <img
        src={getImageByKey(name)}
        className={name}
        alt="Icon"
      />
    </div>
  );
}
