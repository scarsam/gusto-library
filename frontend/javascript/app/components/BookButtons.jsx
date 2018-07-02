import React from 'react'

export const BookButtons = ({book, removeBook, rentBook, current_user}) => {
  return (
    <div>
      <button onClick={() => rentBook(book)}>Rent Book</button>
      {current_user.id === book.user_id ? <button onClick={() => removeBook(book)}>Remove from Library</button> : null}
    </div>
  )
};