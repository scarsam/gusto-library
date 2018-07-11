import React from 'react';

export const User = ({user}) => {
  const rented_books = user.rented_books;
  return (
    <tr>
      <td><img className='image-profile' src={user.imageUrl}/></td>
      <td>{user.name}</td>
      <td>{rented_books ? rented_books.length : null}</td>
    </tr>
  )
};