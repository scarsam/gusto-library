import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// actions
import {submitBookForm} from '../actions/bookFormActions'
import {updateBookForm} from '../actions/bookFormActions'
import {resetBookForm} from "../actions/bookFormActions";

// component
import {BookForm} from '../components/bookForm'
import {Suggestions} from "../components/suggestions";

class BookSearchPage extends Component {
  constructor(props) {
    super();
  }

  componentWillReceiveProps(nextProps) {
    const {searchQuery} = nextProps;
    if (searchQuery.length > 1 && searchQuery !== this.props.searchQuery) {
      this.props.submitBookForm(searchQuery)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== '' && this.props.searchQuery === '') {
      this.props.resetBookForm();
    }
  }

  render() {
    return (
      <div>
        <BookForm
          handleChange={this.props.updateBookForm}
          handleSubmit={this.props.submitBookForm}
          searchQuery={this.props.searchQuery}
        />
        <Suggestions books={this.props.books}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchQuery: state.bookFormReducer.searchQuery,
  books: state.bookFormReducer.books
});

const mapDispatchToProps = (dispatch) => ({
  submitBookForm: (formData) => dispatch(submitBookForm(formData)),
  updateBookForm: (formData) => dispatch(updateBookForm(formData)),
  resetBookForm: () => dispatch(resetBookForm()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookSearchPage))