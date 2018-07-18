import React from 'react'

// Loop over library books and output information for each book
// If current user is the same as the books user id then display the remove book from library button
export const LibraryBookResults = ({libraryBooks, current_user, rentBook, removeBook}) => {
  const libraryResults = libraryBooks.map((book, index) => (
    <div className='col-sm-12 mb-3' key={index}>
      <div className='card' key={index}>
        <div className='d-flex align-items-center'>
          <div className='col-sm-2'>
            <img className='card-img p-2' src={book.thumbnail}/>
          </div>
          <div className='col-sm-10'>
            <div className='card-body'>
              <h5 className='card-title'>{book.title}</h5>
              <p className='card-text'>{book.authors}</p>
              <p className='card-text'>{book.description}</p>
              <button className='btn btn-primary mr-2' onClick={() => rentBook(book)}>Rent Book</button>
              {current_user.id === book.user.id ?
                <button className='btn btn-danger' onClick={() => removeBook(book)}>Remove from Library</button> : null
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return <div className='row'>{libraryResults}</div>
};