import React from 'react'

export const RentedBookResults = ({results, current_user, returnBook}) => {
  const rentedBookResults = results.map((book, index) => {
    const rented_book = book.rented_book;
    return (
      <tr key={index}>
        <th scope='row'>{index}</th>
        <td>{book.title}</td>
        <td>{rented_book.user.name}</td>
        <td>{rented_book.user_id === current_user.id ?
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