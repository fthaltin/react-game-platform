export type FilterType = 'state' | 'genre';

export interface IFilterItem {
  label: string;
  value: string;
}

export interface IFilterType {
  filterId: FilterType;
  filterName: string;
  filterItems: IFilterItem[];
}

export type IFilterData = IFilterType[];

export interface IFilterAction {
  action: 'add' | 'remove';
  filterName: string;
  filterType: FilterType;
}

export class IFiltered {
  state: string[] = [];

  genre: string[] = [];
}

export interface IGameItem {
  id: number;
  name: string;
  genre: string;
  state: string;
}

export type IGameData = IGameItem[];

export interface IShowcaseContainerData {
  [key: string]: IGameItem[];
}
