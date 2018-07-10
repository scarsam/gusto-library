import React from 'react';

export const User = ({index, user, userRentedBooks}) => {
  return (
    <tr key={index}>
      <th scope='row'>{index}</th>
      <td><img class='image-profile' src={user.imageUrl}/></td>
      <td>{user.name}</td>
      <td>{userRentedBooks ? userRentedBooks.length : null}</td>
    </tr>
  )
};