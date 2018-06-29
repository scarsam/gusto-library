import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

// components
import {Book} from '../components/Book'
import {BookButtons} from '../components/BookButtons'

// actions
import {removeBook} from '../actions/bookActions';
import {loadLibraryBooks} from '../actions/libraryActions';
import {getAllUsers} from '../actions/userActions';
import {getCurrentUser} from '../actions/userActions';
import {rentBook} from '../actions/rentActions'
import {returnBook} from '../actions/rentActions'

class LibraryPage extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const userObject = sessionStorage.getItem('user');
    this.props.getCurrentUser(userObject);
    this.props.loadLibraryBooks();
    this.props.getAllUsers();
    // this.props.loadRentedBooks();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isBookRemoved !== this.props.isBookRemoved) {
      this.props.loadLibraryBooks();
    }
  }



  render() {
    const bookList = this.props.libraryBooks.map((book, index) => (
      <li key={index}>
        <Book book={book} users={this.props.users} />
        <BookButtons
          book={book}
          removeBook={this.props.removeBook}
          rentBook={this.props.rentBook}
          returnBook={this.props.returnBook}
          rentedBooks={this.props.rentedBooks}
          current_user={this.props.current_user}
        />
      </li>
    ));
    return (
      <div>
        <h1>Library</h1>
        <ul>{bookList}</ul>
      </div>
   )
  }

}

const mapStateToProps = (state) => ({
  libraryBooks: state.libraryReducer.books,
  isBookRemoved: state.bookReducer.removed,
  users: state.userReducer.users,
  current_user: state.userReducer.current_user,
  rentedBooks: state.rentReducer.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
  loadLibraryBooks: () => dispatch(loadLibraryBooks()),
  getAllUsers: () => dispatch(getAllUsers()),
  getCurrentUser: (userObject) => dispatch(getCurrentUser(userObject)),
  rentBook: (book) => dispatch(rentBook(book)),
  returnBook: (book) => dispatch(returnBook(book)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LibraryPage))