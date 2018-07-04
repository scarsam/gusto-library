import React from 'react'

export const Results = ({libraryBooks, rentedBooks, searchResults, addBook, pending}) => {
  const filteredResults = searchResults
    .filter(book => filterUndefined(book))
    .filter(book => libraryBooks.findIndex(libraryBook => libraryBook.title === book.volumeInfo.title) === -1)
    .filter(book => rentedBooks.findIndex(rentedBook => rentedBook.title === book.volumeInfo.title) === -1);
  const results = filteredResults
    .map((book, index) => (
    <li key={index}>
      <img src={book.volumeInfo.imageLinks.smallThumbnail}/>
      <p>{book.volumeInfo.title}</p>
      <p>{book.volumeInfo.authors}</p>
      <p>{book.volumeInfo.description}</p>
      <button onClick={() => addBook(book)}>Add Library</button>
    </li>
  ));
  if (pending === true) {
    return <p>Loading..</p>
  } else {
    return <ul>{results}</ul>
  }
};

// Filter away results that have any undefined value
const filterUndefined = (book) => {
  const { title, description, authors, imageLinks: {smallThumbnail} = {}} = book.volumeInfo;
  if (title && description && authors && smallThumbnail) {
    return true
  } else {
    return false
  }
};