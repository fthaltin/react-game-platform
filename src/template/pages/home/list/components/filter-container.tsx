/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from 'react';
import { filterData } from '../../../../data/data';
import CheckboxCustom from '../../../../components/checkbox';
import Icon from '../../../../components/icon';
import Card from '../../../../components/card';
import { IFilterAction } from '../../../../models/model';

interface IFilterContainer {
  onFilter(value: IFilterAction): void;
}

export default function FilterContainer({ onFilter }: IFilterContainer) {
  return (
    <Card>
      <div className="filter-container">
        {filterData.map((item, index) => (
          <div className="filter" key={`${item.filterId}-${index}`}>
            <div className="filter-head">
              <h4>{item.filterName}</h4>
              <Icon name="arrowUp" />
            </div>
            <div className="filter-body">
              {item.filterItems.map((filterItem, subIndex) => (
                <div className="filter-item" key={filterItem.value}>
                  <CheckboxCustom
                    defaultChecked={false}
                    title={filterItem.label}
                    value={filterItem.value}
                    onChangeCustom={(event) => {
                      onFilter({
                        action: event?.target?.checked ? 'add' : 'remove',
                        filterName: event?.target?.value,
                        filterType: item.filterId,
                      });
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
