import React from 'react'

export const BookButtons = ({book, removeBook, rentBook, returnBook, rentedBooks, current_user}) => {
  return (
    <div>
      {toggleBookButton(book, rentedBooks, rentBook)}
      {removeAddedBooks(book, removeBook, current_user)}
    </div>
  )
};

const toggleBookButton = (book, rentedBooks, rentBook, returnBook) => {
  if (rentedBooks.some(rentedBook => rentedBook.book_id === book.id)) {
    return <button onClick={() => returnBook(book)}>Return Book</button>
  } else {
    return <button onClick={() => rentBook(book)}>Rent Book</button>
  }
};

const removeAddedBooks = (book, removeBook, current_user) => {
  if (current_user.id === book.user_id) {
    return <button onClick={() => removeBook(book)}>Remove from Library</button>
  }
};