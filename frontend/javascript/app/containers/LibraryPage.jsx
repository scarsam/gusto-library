import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

// components
import {LibraryBookResults} from '../components/LibraryBookResults'
import {RentedBookResults} from '../components/RentedBookResults'

// actions
import {removeBook} from '../actions/bookActions';
import {rentBook} from '../actions/bookActions'
import {returnBook} from '../actions/bookActions'
import {loadLibraryBooks} from '../actions/libraryActions';
import {getAllUsers} from '../actions/userActions';
import {getCurrentUser} from '../actions/userActions';

class LibraryPage extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const {getCurrentUser, getAllUsers, loadLibraryBooks} = this.props;
    const userObject = sessionStorage.getItem('user');
    getCurrentUser(userObject);
    getAllUsers();
    loadLibraryBooks();
  }

  render() {
    const {libraryBooks, rentedBooks, pending} = this.props;

    if (pending === true) {
      return <p>Loading..</p>
    } else {
      return (
        <div>
          <h1>Library</h1>
          <LibraryBookResults {...this.props} results={libraryBooks} />
          <h1>Rented Books</h1>
          <RentedBookResults {...this.props} results={rentedBooks}/>
        </div>
      )
    }
  }

}

const mapStateToProps = (state) => ({
  libraryBooks: state.libraryReducer.availableBooks,
  rentedBooks: state.libraryReducer.rentedBooks,
  pending: state.libraryReducer.pending,
  users: state.userReducer.users,
  current_user: state.userReducer.current_user,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
  rentBook: (book) => dispatch(rentBook(book)),
  returnBook: (book) => dispatch(returnBook(book)),
  loadLibraryBooks: () => dispatch(loadLibraryBooks()),
  getAllUsers: () => dispatch(getAllUsers()),
  getCurrentUser: (userObject) => dispatch(getCurrentUser(userObject)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LibraryPage))