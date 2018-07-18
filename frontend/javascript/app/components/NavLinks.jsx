import React from 'react';
import {NavLink} from 'react-router-dom';

// Nav and logout links
export const NavLinks = ({logout}) => (
  <ul className='nav justify-content-center'>
    <li className='nav-item'>
      <NavLink exact className='nav-link' to='/'>Add Book</NavLink>
    </li>
    <li className='nav-item'>
      <NavLink exact className='nav-link' to='/library'>Library</NavLink>
    </li>
    <li className='nav-item'>
      <NavLink exact className='nav-link' to='/users'>Users</NavLink>
    </li>
    <li className='nav-item'>
      <a href='#' className='nav-link' onClick={() => logout()}>Logout</a>
    </li>
  </ul>
);