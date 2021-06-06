/* eslint-disable react/no-array-index-key */
import React from 'react';
import { IShowcaseContainerData } from '../../../../models/model';
import Showcase from './showcase';

interface IShowcaseContainer {
  data: IShowcaseContainerData;
}
export default function ShowcaseContainer({ data }: IShowcaseContainer) {
  // const [showcaseList, setList] = useState<IShowcaseContainerData[]>([]);

  return (
    <>
      {Object.entries(data).map(([key, value], index) => (
        <Showcase key={`${key}-${index}`} char={key} list={value} />
      ))}

    </>

  );
}
