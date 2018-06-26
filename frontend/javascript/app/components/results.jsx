import React from 'react'

export const Results = (props) => {
  const results = filteredResults(props)
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

const filteredResults = (props) => {
  if (props.addedBook && props.libraryBooks.length > 0) {
    return props.searchResults
      .filter(book => book.volumeInfo.title !== props.addedBook.volumeInfo.title)
      .filter(book => props.libraryBooks.findIndex(libraryBook => libraryBook.title === book.volumeInfo.title) === -1)
  } else {
    return props.searchResults
      .filter(book => props.libraryBooks.findIndex(libraryBook => libraryBook.title === book.volumeInfo.title) === -1)
  }
};