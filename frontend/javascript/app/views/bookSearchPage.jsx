import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// component
import BookSearch from '../containers/bookSearch'
import BookSearchResults from '../containers/bookSearchResults'

class BookSearchPage extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <BookSearch/>
        <BookSearchResults/>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(BookSearchPage))