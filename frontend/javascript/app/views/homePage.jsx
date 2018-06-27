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
    const userObject = sessionStorage.getItem('user')
    this.props.getCurrentUser(userObject)
  }

  onClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <div>
        <h1>Welcome {this.props.current_user}</h1>
        <ul>
          <li>Join table for rented books</li>
          <li>Nav</li>
          <li>Profile page</li>
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
