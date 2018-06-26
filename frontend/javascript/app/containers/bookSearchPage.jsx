import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// actions
import {searchInput} from '../actions/searchActions'
import {updateSearchInput} from '../actions/searchActions'
import {addBook} from "../actions/bookActions";
import {loadExistingBooks} from "../actions/libraryActions";

// component
import {BookForm} from '../components/bookForm'
import {Suggestions} from "../components/suggestions";
import {searchReducer} from "../reducers/searchReducer";

class BookSearchPage extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.loadExistingBooks();
  }

  componentWillReceiveProps(nextProps) {
    debugger;
  }

  componentDidUpdate(prevProps) {
    const {searchQuery} = prevProps;
    if (searchQuery !== this.props.searchQuery) {
      this.props.searchInput(this.props.searchQuery)
    }
  }

  render() {
    return (
      <div>
        <BookForm
          handleChange={this.props.updateSearchInput}
          searchQuery={this.props.searchQuery}
        />
        <Suggestions
          addBook={this.props.addBook}
          pending={this.props.pending}
          books={this.props.books}
          existingBooks={this.props.existingBooks}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchQuery: state.searchReducer.searchQuery,
  books: state.searchReducer.books,
  pending: state.searchReducer.pending,
  existingBooks: state.libraryReducer.books,
});

const mapDispatchToProps = (dispatch) => ({
  searchInput: (formData) => dispatch(searchInput(formData)),
  updateSearchInput: (formData) => dispatch(updateSearchInput(formData)),
  addBook: (book) => dispatch(addBook(book)),
  loadExistingBooks: () => dispatch(loadExistingBooks())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookSearchPage))