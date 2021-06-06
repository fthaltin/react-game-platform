import React from 'react';
// import Button from '../../components/button';

export default function Menu() {
  return (
    <div className="menu-container">
      <ul className="menu">
        <li className="active">
          <a href="#x">Games</a>
        </li>
        <li>
          <a href="#x">Membership</a>
        </li>
        <li>
          <a href="#x">Download</a>
        </li>
        <li>
          <a href="#x">Blog</a>
        </li>
        <li>
          <a href="#x">Support</a>
        </li>
      </ul>
      <div>
        <button type="button" className="btn btn-success">LET'S PLAY</button>
      </div>
    </div>
  );
}
