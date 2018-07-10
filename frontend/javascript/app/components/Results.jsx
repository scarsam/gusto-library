import React from 'react'
import '../../../stylesheets/main.scss'

export const Results = ({libraryBooks, rentedBooks, searchResults, addBook, pending}) => {
  const filteredResults = searchResults
    .filter(book => filterUndefined(book))
    .filter(book => libraryBooks.findIndex(libraryBook => libraryBook.title === book.volumeInfo.title) === -1)
    .filter(book => rentedBooks.findIndex(rentedBook => rentedBook.title === book.volumeInfo.title) === -1);
  const results = filteredResults
    .map((book, index) => (
      <div className='card' key={index}>
        <img className='card-img-top' src={book.volumeInfo.imageLinks.smallThumbnail}/>
        <div className='card-body'>
          <h5 className='card-title'>{book.volumeInfo.title}</h5>
          <p className='card-text'>{book.volumeInfo.authors}</p>
          <p className='card-text'>{truncateDescription(book.volumeInfo.description)}</p>
          <button className="btn btn-primary" onClick={() => addBook(book)}>Add Library</button>
        </div>
      </div>
  ));
  if (pending === true) {
    return <p>Loading..</p>
  } else {
    return <div className="card-columns">{results}</div>
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

const truncateDescription = (description) => {
  if (description.length > 100) {
    return description.substring(0, 100) + '...'
  } else
    return description + '...'
};