import React from 'react'

export const Suggestions = (props) => {
  const results = props.books
    .filter(book => props.existingBooks.findIndex(existingBook => existingBook.title === book.volumeInfo.title) === -1)
    .map((book, index) => (
    <li key={index}>
      <img src={book.volumeInfo.imageLinks.smallThumbnail}/>
      <p>{book.volumeInfo.title}</p>
      <p>{book.volumeInfo.authors}</p>
      <p>{book.volumeInfo.description}</p>
      <button onClick={() => props.addBook(book)}>Add Library</button>
    </li>
  ));
  if (props.pending === true) {
    return <p>Loading..</p>
  } else {
    return <ul>{results}</ul>
  }
};