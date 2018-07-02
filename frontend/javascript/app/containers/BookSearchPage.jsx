import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// actions
import {addBook} from "../actions/bookActions";
import {loadLibraryBooks} from "../actions/libraryActions";
import {searchInput} from '../actions/searchActions'
import {updateSearchInput} from '../actions/searchActions'

// component
import {Results} from "../components/Results";
import {Search} from '../components/Search'

class BookSearchPage extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.loadLibraryBooks();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.props.searchInput(this.props.searchQuery);
      this.props.loadLibraryBooks();
    }
  }

  render() {
    return (
      <div>
        <Search
          handleChange={this.props.updateSearchInput}
          searchQuery={this.props.searchQuery}
        />
        <Results
          addBook={this.props.addBook}
          pending={this.props.pending}
          searchResults={this.props.searchResults}
          libraryBooks={this.props.libraryBooks}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchQuery: state.searchReducer.searchQuery,
  searchResults: state.searchReducer.searchResults,
  pending: state.searchReducer.pending,
  libraryBooks: state.libraryReducer.books
});

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => dispatch(addBook(book)),
  loadLibraryBooks: () => dispatch(loadLibraryBooks()),
  searchInput: (formData) => dispatch(searchInput(formData)),
  updateSearchInput: (formData) => dispatch(updateSearchInput(formData)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookSearchPage))