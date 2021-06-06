import React from 'react';
import Grid from '../../components/grid';
import Logo from '../../components/logo';
import Menu from './menu';

export default function Header() {
  return (
    <div id="header">
      <Grid>
        <div className="header-inner-container">
          <Logo />
          <Menu />
        </div>
      </Grid>
    </div>
  );
}
