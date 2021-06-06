/* eslint-disable react/no-array-index-key */
import React from 'react';
import Card from '../../../../components/card';
import { IGameItem, IShowcaseContainerData } from '../../../../models/model';

interface IShowcase {
  list: IGameItem[];
  char: string;
}

export default function Showcase({ list, char }: IShowcase) {
  return (

    <Card>
      <div className="showcase">
        <div className="showcase-head">
          <div className="hexagon-container">
            <div className="hexagon" />
            <span className="char-name">{char}</span>
          </div>
        </div>
        <div className="showcase-body">
          <ul>
            {list.map((item, index) => (
              <li key={`${item.id}-${index}`}><a href="#dd">{item.name}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
