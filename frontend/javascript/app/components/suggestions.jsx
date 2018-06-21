import React from 'react'

export const Suggestions = (props) => {
  const results = props.books
    .filter(book => book.volumeInfo.imageLinks !== undefined)
    .map((book, index) => (
    <li key={index}>
      <img src={book.volumeInfo.imageLinks.smallThumbnail}/>
      <p>{book.volumeInfo.title}</p>
      <p>{book.volumeInfo.authors}</p>
      <p>{book.volumeInfo.description}</p>
      <form onSubmit={this.handleSubmit}>
        <label>
          Add to:
          <select>
            <option value="wishList">Wish list</option>
            <option value="library">Library</option>
          </select>
        </label>
        <label>
          Location:
          <select>
            <option value="sanFrancisco">San Francisco</option>
            <option value="denver">Denver</option>
          </select>
        </label>
        <input type="submit" value="Add" />
      </form>
    </li>
  ));
  if (props.pending === true) {
    return <p>Loading..</p>
  } else {
    return <ul>{results}</ul>
  }
};