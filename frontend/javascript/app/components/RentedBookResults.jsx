import React from 'react'

export const RentedBookResults = ({results, current_user, returnBook, users}) => {
  const rentedBookResults = results.map((book, index) => (
    <li key={index}>
      <img src={book.thumbnail}/>
      <p>{book.title}</p>
      <p>{book.authors}</p>
      <p>{book.description}</p>
      <p>Rented by: {userName(book.rented_user, users)}</p>
    </li>
  ));
  return (
    <ul>{rentedBookResults}</ul>
  )
};

export const userName = (rented_user, users) => {
  let user = users.find(user => user.id === rented_user);
  return user.name
};