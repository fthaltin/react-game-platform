import React, { ReactElement } from 'react';

interface ICol {
  children: any;
  size?: number;
}

interface IRow {
  children: ReactElement<ICol> | Array<ReactElement<ICol>>;
}

interface IGrid {
  children: any;

  small?: boolean;
}

const Col = ({ children, size }: ICol) => (
  <div className="col" style={{ flex: size || 1 }}>
    {children}
  </div>
);

Col.defaultProps = {
  size: 1,
};

export { Col };

export const Row = ({ children }: IRow) => (
  <div className="row" style={{ display: 'flex' }}>
    {children}
  </div>
);

const Grid = ({ children, small }: IGrid) => (
  <div className={`container${small ? ' small-container' : ''}`}>
    {children}
  </div>
);

Grid.defaultProps = {
  small: false,
};

export default Grid;
