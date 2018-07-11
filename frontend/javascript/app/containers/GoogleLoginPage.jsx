import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import GoogleLogin from 'react-google-login';

// Actions
import { loginUser } from "../actions/sessionActions";
import { loginError } from "../actions/sessionActions";

class GoogleLoginPage extends Component {
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
      <div className='height-100vh d-flex justify-content-center flex-column align-items-center text-center'>
          <h1 className='mb-4'>Gusto Library</h1>
          <GoogleLogin
            clientId="1070093517148-deo4ica3jpaq13ghcttmbb7lertk5vls.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.onSuccess}
            onFailure={this.onFailure}
            className={'google-login'}>
            <FontAwesomeIcon icon={faGoogle} />
            <span> Login with Google</span>
          </GoogleLogin>
      </div>
    );
  }
}

// Dispatch for form inputs and submit
const mapDispatchToProps = (dispatch) => ({
  loginUser: (userData) => dispatch(loginUser(userData)),
  loginError: (userData) => dispatch(loginError(userData))
});

export default withRouter(connect(null, mapDispatchToProps)(GoogleLoginPage))