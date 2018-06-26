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

// Filter search results and also filters the added books when the user adds a book
const filteredResults = (props) => {
  let filteredBooks = props.searchResults
    .filter(book => filterUndefined(book))
    .filter(book => filterLibraryBooks(book, props.libraryBooks));
  if (props.addedBook) {
    filteredBooks.filter(book => filterAddedBooks(book, props.addedBook))
  }
  return filteredBooks
};

// Filter away books that exist in the Library (db)
const filterLibraryBooks = (book, libraryBooks) => {
  return libraryBooks.findIndex(libraryBook => libraryBook.title === book.volumeInfo.title) === -1;
};

// Filter away books that just got added and can be found in the store
const filterAddedBooks = (book, addedBook) => {
  return book.volumeInfo.title !== addedBook.volumeInfo.title
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