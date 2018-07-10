import React from 'react';

export const User = ({user, userRentedBooks}) => {
  return (
    <tr>
      <td><img className='image-profile' src={user.imageUrl}/></td>
      <td>{user.name}</td>
      <td>{userRentedBooks ? userRentedBooks.length : null}</td>
    </tr>
  )
};