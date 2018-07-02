import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

// components
import {Book} from '../components/Book'
import {BookButtons} from '../components/BookButtons'

// actions
import {loadRentedBooks} from '../actions/bookRentalActions'
import {getAllUsers} from '../actions/userActions';

class BookRentalLog extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.loadRentedBooks()
    this.props.getAllUsers();
  }

  render() {
    const rentedBookResults = this.props.rentedBooks.map((book, index) => (
      <li key={index}>
        <Book
          book={book}
          users={this.props.users}
        />
      </li>
    ));

    return (
      <div>
        <h1>Book Rental Log</h1>
        <ul>{rentedBookResults}</ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  rentedBooks: state.libraryReducer.rentedBooks,
  users: state.userReducer.users,
});

const mapDispatchToProps = (dispatch) => ({
  loadRentedBooks: (book) => dispatch(loadRentedBooks()),
  getAllUsers: () => dispatch(getAllUsers()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookRentalLog))