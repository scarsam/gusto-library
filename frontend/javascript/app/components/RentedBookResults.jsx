import React from 'react'

export const RentedBookResults = ({results, current_user, returnBook, users}) => {
  const rentedBookResults = results.map((book, index) => {
    const userName = returnUserName(book.rented_user, users);
    return (
      <tr key={index}>
        <th scope='row'>{index}</th>
        <td>{book.title}</td>
        <td>{userName}</td>
        <td>{userName === current_user.name ?
          <a className='text-primary' onClick={() => returnBook(book)}>Return Book</a> : null
        }</td>
      </tr>
    );
  });
  return (
    <table className='table'>
      <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Book Title</th>
        <th scope='col'>Rented By</th>
        <th scope='col'>Action</th>
      </tr>
      </thead>
      <tbody>
        {rentedBookResults}
      </tbody>
    </table>
  )
};

export const returnUserName = (rented_user, users) => {
  if (rented_user !== undefined) {
    let user = users.find(user => user.id === rented_user);
    return user.name
  }
};