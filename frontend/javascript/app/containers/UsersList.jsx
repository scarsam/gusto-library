import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// action
import {getAllUsers} from '../actions/userActions';

// Components
import {User} from '../components/User'

class UsersList extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    const {users, pending} = this.props;
    const userList = users.map((user, index) => {
      return <User key={index} user={user} />
    });
    if (pending === true) {
      return <p>Loading..</p>
    } else {
      return (
        <div>
        <h4 className='mb-4 mt-4'>Users</h4>
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
  pending: state.userReducer.pending,
});

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getAllUsers()),
});

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  pending: PropTypes.bool,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersList))