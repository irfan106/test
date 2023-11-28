import React from 'react';
import Dropdown from './Dropdown';
import './navbar.css';

export default function Navbar({ setGroup, setOrder }) {
  return (
    <div id="navbar">
      <Dropdown setGroup={setGroup} setOrder={setOrder} />
    </div>
  );
}
