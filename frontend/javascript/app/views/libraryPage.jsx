import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

// components
import {Books} from '../components/books'

// actions
import {removeBook} from '../actions/bookActions';
import {loadLibraryBooks} from '../actions/libraryActions';
import {getAllUsers} from "../actions/userActions";

class LibraryPage extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.loadLibraryBooks();
    this.props.getAllUsers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isBookRemoved !== this.props.isBookRemoved) {
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
          users={this.props.users}
        />
      </div>
   )
  }

}

const mapStateToProps = (state) => ({
  libraryBooks: state.libraryReducer.books,
  isBookRemoved: state.bookReducer.removed,
  users: state.userReducer.users
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
  loadLibraryBooks: () => dispatch(loadLibraryBooks()),
  getAllUsers: () => dispatch(getAllUsers()),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LibraryPage))