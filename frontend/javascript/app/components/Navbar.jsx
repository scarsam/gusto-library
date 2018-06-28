import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => (
  <div>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/books/new'>Add Book</NavLink>
    <NavLink to='/library'>Library</NavLink>
    <NavLink to='/users'>Users</NavLink>
  </div>
);