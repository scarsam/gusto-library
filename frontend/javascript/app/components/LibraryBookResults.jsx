import React from 'react'

export const LibraryBookResults = ({results, current_user, rentBook, removeBook}) => {
  const libraryResults = results.map((book, index) => (
    <li key={index}>
      <img src={book.thumbnail}/>
      <p>{book.title}</p>
      <p>{book.authors}</p>
      <p>{book.description}</p>
      <button onClick={() => rentBook(book)}>Rent Book</button>
      {current_user.id === book.user_id ? <button onClick={() => removeBook(book)}>Remove from Library</button> : null}
    </li>
  ));
  return (
    <ul>{libraryResults}</ul>
  )
};