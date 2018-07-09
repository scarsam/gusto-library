import React from 'react';

export const User = ({user, userRentedBooks}) => {
  return (
    <li>
      <img src={user.imageUrl}/>
      <p>{user.name}</p>
      <p>Rented books: {userRentedBooks ? userRentedBooks.length : null}</p>
    </li>
  )
};