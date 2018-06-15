import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'

import GoogleLogin from 'react-google-login';

// Actions
import { loginUser } from "../actions/sessionActions";
import { loginError } from "../actions/sessionActions";

class SocialLogin extends Component {
  constructor(props) {
    super();
  }

  onSuccess = (userData) => {
    this.props.loginUser(userData);
  };

  onFailure = (error) => {
    this.props.loginError(error);
  };

  render () {
    return (
      <div>
        <h1>Google Login</h1>
        <GoogleLogin
          clientId="1070093517148-deo4ica3jpaq13ghcttmbb7lertk5vls.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
        />
      </div>
    );
  }
}

// Dispatch for form inputs and submit
const mapDispatchToProps = (dispatch) => ({
  loginUser: (userData) => dispatch(loginUser(userData)),
  loginError: (userData) => dispatch(loginError(userData))
});

export default withRouter(connect(null, mapDispatchToProps)(SocialLogin))