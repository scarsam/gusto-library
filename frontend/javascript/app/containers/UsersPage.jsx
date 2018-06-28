import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// action
import {getAllUsers} from '../actions/userActions';

//
import {UsersList} from '../components/UsersList'

class UsersPage extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    return(
      <div>
        <h1>Users Page</h1>
        <UsersList users={this.props.users}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.userReducer.users
});

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getAllUsers()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersPage))