/* eslint-disable max-len */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import Grid, { Row, Col } from '../../../components/grid';
import {
  IFilterAction,
  IFiltered,
  FilterType,
  IGameData,
  IGameItem,
  IShowcaseContainerData,
} from '../../../models/model';
import FilterContainer from './components/filter-container';
import ShowcaseContainer from './components/showcase-container';

import { gameData } from '../../../data/data';

export default function List() {
  const [listMapState, setListMap] = useState<IShowcaseContainerData>({});
  const [filterState, setFilterState] = useState<IFiltered>(new IFiltered());

  const covertShowcaseFormat = (data: IGameData) => {
    const listMap: IShowcaseContainerData = {};
    const hasChar = (char: string): boolean => !!listMap[char];
    const getFirstChar = (str: string): string => str.charAt(0);
    data.forEach((item) => {
      const firstChar = getFirstChar(item.name.toUpperCase());
      if (!hasChar(firstChar)) {
        listMap[firstChar] = [item];
      } else {
        listMap[firstChar] = [...listMap[firstChar], item];
      }
    });

    setListMap(listMap);
  };

  const filterProcess = (filteredItems: IFiltered) => {
    const hasFilter = (filterType: FilterType, value: string): boolean => {
      const isEmpty = filteredItems[filterType].length == 0;
      const hasItem = filteredItems[filterType].some((filterItem) => filterItem === value);
      return hasItem || isEmpty;
    };

    let newGameList = [];
    if (filteredItems.state.length > 0 || filteredItems.genre.length > 0) {
      newGameList = gameData.filter(
        (item: IGameItem) => {
          const hasGenre = hasFilter('genre', item.genre);
          const hasState = hasFilter('state', item.state);
          return hasGenre && hasState;
        },
      );
    } else {
      newGameList = gameData;
    }

    covertShowcaseFormat(newGameList);

    setFilterState(filteredItems);
  };

  const getFiltered = (filterAction: IFilterAction): IFiltered => {
    const newFiltered: IFiltered = { ...filterState };
    if (filterAction.action === 'add') {
      newFiltered[filterAction.filterType] = [
        ...newFiltered[filterAction.filterType],
        filterAction.filterName,
      ];
    } else {
      newFiltered[filterAction.filterType] = [
        ...newFiltered[filterAction.filterType].filter(
          (item) => item !== filterAction.filterName,
        ),
      ];
    }

    return newFiltered;
  };

  const onFilter = (filterAction: IFilterAction) => {
    const filtered = getFiltered(filterAction);
    filterProcess(filtered);
  };

  useEffect(() => {
    covertShowcaseFormat(gameData);
  }, []);

  return (
    <div id="list" className="list">
      <Grid>
        <div className="list-head">
          <Row>
            <Col>
              <h2>Browse Games</h2>
            </Col>
          </Row>
        </div>
        <div className="list-body">
          <Row>
            <Col size={1}>
              <FilterContainer onFilter={onFilter} />
            </Col>
            <Col size={2}>
              <ShowcaseContainer data={listMapState} />
            </Col>
          </Row>
        </div>
      </Grid>
    </div>
  );
}
