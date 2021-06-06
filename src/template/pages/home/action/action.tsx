/* eslint-disable max-len */
import React from 'react';
import Grid from '../../../components/grid';
import Search from './search';

export default function Action() {
  return (
    <div id="action" className="">
      <Grid small>
        <div className="action-inner-container">
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
          <p>With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device!</p>
          <Search />
        </div>
      </Grid>
    </div>
  );
}
