import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// action
import {getAllUsers} from '../actions/userActions';
import {loadLibraryBooks} from "../actions/libraryActions";

// Components
import {User} from '../components/User'

class UsersList extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getAllUsers();
    this.props.loadLibraryBooks();
  }

  render() {
    const {users, rentedBooks, pending} = this.props;
    const userList = users.map((user, index) => {
      const userRentedBooks = rentedBooks.filter(rentedBook => rentedBook.rented_user === user.id);
      return <User key={index} user={user} userRentedBooks={userRentedBooks} />
    });
    if (pending === true) {
      return <p>Loading..</p>
    } else {
      return (
        <div>
        <h1>Users</h1>
          <table className='table'>
            <thead>
            <tr>
              <th scope='col'>Profile Picture</th>
              <th scope='col'>Name</th>
              <th scope='col'>Currently Rented Books</th>
            </tr>
            </thead>
            <tbody>
              {userList}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
  rentedBooks: state.libraryReducer.rentedBooks,
  pending: state.userReducer.pending,
});

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getAllUsers()),
  loadLibraryBooks: () => dispatch(loadLibraryBooks()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersList))