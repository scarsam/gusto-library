import React from 'react'

export const Book = ({book, users}) => {
  return (
    <div>
      <img src={book.thumbnail}/>
      <p>{book.title}</p>
      <p>{book.authors}</p>
      <p>{book.description}</p>
      <p>Added by: {userName(book.user_id, users)}</p>
    </div>
  )
};

const userName = (id, users) => {
  const user = users.find(user => user.id === id);
  return user ? user.name : ''
};