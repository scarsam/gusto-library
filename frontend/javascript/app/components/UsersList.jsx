import React from 'react';
import { Link } from 'react-router-dom';

export const UsersList = ({users}) => {
  const usersList = users.map((user, index) => (
    <li key={index}>
      <p>{user.name}</p>
      <Link key={user.id} to={`/users/${user.id}`}>{user.name}</Link>
    </li>
  ));
  return <ul>{usersList}</ul>
};