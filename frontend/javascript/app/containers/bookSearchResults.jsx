import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// actions
import {addBook} from "../actions/bookActions";
import {loadLibraryBooks} from "../actions/libraryActions";

// component
import {Results} from "../components/results";

class BookSearchResults extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.loadLibraryBooks();
  }

  render() {
    return (
      <Results
        addBook={this.props.addBook}
        pending={this.props.pending}
        searchResults={this.props.searchResults}
        libraryBooks={this.props.libraryBooks}
        addedBook={this.props.addedBook}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  searchQuery: state.searchReducer.searchQuery,
  searchResults: state.searchReducer.searchResults,
  pending: state.searchReducer.pending,
  libraryBooks: state.libraryReducer.books,
  addedBook: state.bookReducer.book,
});

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => dispatch(addBook(book)),
  loadLibraryBooks: () => dispatch(loadLibraryBooks())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookSearchResults))