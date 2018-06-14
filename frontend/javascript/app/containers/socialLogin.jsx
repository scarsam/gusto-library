import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'

import GoogleLogin from 'react-google-login';

// Actions
import { createUserSessionSuccess } from "../actions/sessionActions";
import { createUserSessionFailure } from "../actions/sessionActions";

class SocialLogin extends Component {
  constructor(props) {
    super();
  }

  onSuccess = (userData) => {
    this.props.createUserSessionSuccess(userData);
  };

  onFailure = (error) => {
    this.props.createUserSessionFailure(error);
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
  createUserSessionSuccess: (userData) => dispatch(createUserSessionSuccess(userData)),
  createUserSessionFailure: (userData) => dispatch(createUserSessionFailure(userData))
});

export default withRouter(connect(null, mapDispatchToProps)(SocialLogin))