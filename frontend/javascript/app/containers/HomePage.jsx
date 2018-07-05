import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// actions
import {logoutUser} from '../actions/sessionActions'
import {getCurrentUser} from "../actions/userActions";

class HomePage extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const userObject = sessionStorage.getItem('user');
    this.props.getCurrentUser(userObject);
  }

  onClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <div>
        <h1>Welcome {this.props.current_user.name}</h1>
        <ul>
          <li>Add comments for complex reducers</li>
          <li>Show rented books under user profile</li>
          <li>Book page</li>
          <li>Short book description on BookList</li>
          <li>User profile in nav</li>
          <li>Check token validation on backend</li>
          <li>Style</li>
        </ul>
        <button onClick={this.onClick}>Logout</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  current_user: state.userReducer.current_user
});


const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  getCurrentUser: (userObject) => dispatch(getCurrentUser(userObject)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage))
