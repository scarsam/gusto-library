import React from 'react'

export const Search = (props) => (
  <form>
    <label htmlFor='search'/>
    <input type='search' placeholder='Search' onChange={props.handleChange} value={props.searchQuery} />
  </form>
);