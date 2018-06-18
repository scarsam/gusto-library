import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// actions
import { logoutUser } from '../actions/sessionActions'
import { currentUser } from "../actions/userActions";
import {userReducer} from "../reducers/userReducer";

class Home extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.currentUser();
  }

  onClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const {user} = this.props.user;
    return (
      <div>
        <h1>Welcome {user.name}</h1>
        <ul>
          <li>Ready</li>
          <li>Move user to sessionReducer?</li>
        </ul>
        <button onClick={this.onClick}>Logout</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  currentUser: () => dispatch(currentUser())
});

const mapStateToProps = (state) => ({
  user: state.userReducer
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
