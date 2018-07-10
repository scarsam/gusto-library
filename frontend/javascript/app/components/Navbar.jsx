import React from 'react';
import {NavLink} from 'react-router-dom';
import {logoutUser} from '../actions/sessionActions'

export const Navbar = () => (
  <ul className='nav justify-content-center'>
    <li className='nav-item'>
      <NavLink className='nav-link' to='/'>Add Book</NavLink>
    </li>
    <li className='nav-item'>
      <NavLink className='nav-link' to='/library'>Library</NavLink>
    </li>
    <li className='nav-item'>
      <NavLink className='nav-link' to='/users'>Users</NavLink>
    </li>
    <li className='nav-item'>
      <a className='nav-link' onClick={() => logoutUser()}>Logout</a>
    </li>
  </ul>
);