import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

// components
import {Book} from '../components/Book'
import {BookButtons} from '../components/BookButtons'

// actions
import {removeBook} from '../actions/bookActions';
import {rentBook} from '../actions/bookActions'
import {loadLibraryBooks} from '../actions/libraryActions';
import {getAllUsers} from '../actions/userActions';
import {getCurrentUser} from '../actions/userActions';

class BookList extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const userObject = sessionStorage.getItem('user');
    this.props.getCurrentUser(userObject);
    this.props.getAllUsers();
    this.props.loadLibraryBooks();
  }

  render() {
    const libraryResults = this.props.libraryBooks.map((book, index) => (
      <li key={index}>
        <Book
          book={book}
          users={this.props.users}
        />
        <BookButtons
          book={book}
          removeBook={this.props.removeBook}
          rentBook={this.props.rentBook}
          current_user={this.props.current_user}
        />
      </li>
    ));

    return (
      <div>
        <h1>Library</h1>
        <ul>{libraryResults}</ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  libraryBooks: state.libraryReducer.books,
  users: state.userReducer.users,
  current_user: state.userReducer.current_user,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
  rentBook: (book) => dispatch(rentBook(book)),
  loadLibraryBooks: () => dispatch(loadLibraryBooks()),
  getAllUsers: () => dispatch(getAllUsers()),
  getCurrentUser: (userObject) => dispatch(getCurrentUser(userObject)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookList))