import React, { Component } from 'react'
import PropTypes from 'prop-types';
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
    const {libraryBooks, updateSearchInput, searchQuery, rentedBooks, searchResults, pending, addBook, message} = this.props;

    return (
      <div className='row'>
        {message ? <div className='alert alert-success success-banner' role='alert'>{message}</div> : null}
        <div className='col-sm-12 mb-3'>
          <Search
            handleChange={updateSearchInput}
            searchQuery={searchQuery}
          />
        </div>
        <div className='col-sm-12'>
        <Results
            addBook={addBook}
            pending={pending}
            searchResults={searchResults}
            libraryBooks={libraryBooks}
            rentedBooks={rentedBooks}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchQuery: state.searchReducer.searchQuery,
  searchResults: state.searchReducer.searchResults,
  pending: state.searchReducer.pending,
  libraryBooks: state.libraryReducer.availableBooks,
  rentedBooks: state.libraryReducer.rentedBooks,
  message: state.notificationReducer.notification,
});

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => dispatch(addBook(book)),
  loadLibraryBooks: () => dispatch(loadLibraryBooks()),
  searchInput: (formData) => dispatch(searchInput(formData)),
  updateSearchInput: (formData) => dispatch(updateSearchInput(formData)),
});

BookSearchPage.propTypes = {
  searchQuery: PropTypes.string,
  searchResults: PropTypes.arrayOf(PropTypes.object),
  pending: PropTypes.bool,
  libraryBooks: PropTypes.arrayOf(PropTypes.object),
  rentedBooks: PropTypes.arrayOf(PropTypes.object),
  message: PropTypes.string
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookSearchPage))