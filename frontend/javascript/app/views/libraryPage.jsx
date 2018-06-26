import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

// components
import {Books} from '../components/books'
import {loadLibraryBooks} from "../actions/libraryActions";

// actions
import {removeBook} from "../actions/bookActions";

class LibraryPage extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.loadLibraryBooks();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookRemoved !== this.props.bookRemoved) {
      this.props.loadLibraryBooks();
    }
  }

  render() {
    return (
      <div>
        <h1>Library</h1>
        <Books
          books={this.props.libraryBooks}
          removeBook={this.props.removeBook}
        />
      </div>
   )
  }

}

const mapStateToProps = (state) => ({
  libraryBooks: state.libraryReducer.books,
  bookRemoved: state.bookReducer.removed
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
  loadLibraryBooks: () => dispatch(loadLibraryBooks())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LibraryPage))