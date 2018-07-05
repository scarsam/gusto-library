import React from 'react'

export const RentedBookResults = ({results, current_user, returnBook, users}) => {
  const rentedBookResults = results.map((book, index) => {
    const userName = returnUserName(book.rented_user, users);
    return (
      <li key={index}>
        <img src={book.thumbnail}/>
        <p>{book.title}</p>
        <p>{book.authors}</p>
        <p>{book.description}</p>
        <p>Rented by: {userName}</p>
        {userName === current_user.name ? <button onClick={() => returnBook(book)}>Return Book</button> : ''}
      </li>
    );
  });
  return (
    <ul>{rentedBookResults}</ul>
  )
};

export const returnUserName = (rented_user, users) => {
  let user = users.find(user => user.id === rented_user);
  return user.name
};