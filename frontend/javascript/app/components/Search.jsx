import React from 'react'

export const Search = (props) => (
  <form>
    <label htmlFor='search'/>
    <input className="form-control form-control-lg" type='search' placeholder='Add a book' onChange={props.handleChange} value={props.searchQuery} />
  </form>
);