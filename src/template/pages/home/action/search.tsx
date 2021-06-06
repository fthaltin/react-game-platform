import React from 'react';
import Icon from '../../../components/icon';

export default function Search() {
  return (
    <div className="search-container">
      <div className="icon-container">
        <Icon name="search" />
      </div>
      <div className="input-container">
        <input type="text" placeholder="Search Games" />
      </div>
    </div>
  );
}
