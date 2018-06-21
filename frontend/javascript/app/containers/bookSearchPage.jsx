import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// actions
import {submitBookForm} from '../actions/bookFormActions'
import {updateBookForm} from '../actions/bookFormActions'

// component
import {BookForm} from '../components/bookForm'
import {Suggestions} from "../components/suggestions";

class BookSearchPage extends Component {
  constructor(props) {
    super();
  }

  componentDidUpdate(prevProps) {
    const {searchQuery} = prevProps;
    if (searchQuery !== this.props.searchQuery) {
      this.props.submitBookForm(this.props.searchQuery)
    }
  }

  render() {
    return (
      <div>
        <BookForm
          handleChange={this.props.updateBookForm}
          searchQuery={this.props.searchQuery}
        />
        <Suggestions pending={this.props.pending} books={this.props.books}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchQuery: state.bookFormReducer.searchQuery,
  books: state.bookFormReducer.books,
  pending: state.bookFormReducer.pending
});

const mapDispatchToProps = (dispatch) => ({
  submitBookForm: (formData) => dispatch(submitBookForm(formData)),
  updateBookForm: (formData) => dispatch(updateBookForm(formData)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookSearchPage))