import React from 'react'

export const Books = (props) => {
  const results = props.books.map((book, index) => (
    <li key={index}>
      <img src={book.thumbnail}/>
      <p>{book.title}</p>
      <p>{book.authors}</p>
      <p>{book.description}</p>
      <button onClick={() => props.removeBook(book)}>Remove from Library</button>
    </li>
  ));
  if (results.length > 0) {
    return <ul>{results}</ul>
  } else {
    return <p>No books added to the library yet.</p>
  }
};