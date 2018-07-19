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
    console.log(userData);
    this.props.loginUser(userData);
  };

  onFailure = (error) => {
    console.log(error);
    this.props.loginError(error);
  };

  render () {
    return (
      <div className='row height-100vh justify-content-center flex-column align-items-center text-center'>
        <div className='col-sm-8 col-sm-offset-2'>
          <h1>Welcome to the library</h1>
          <p className='mt-3 mb-3'>This is a place to come and see what books we currently have in our library. A place to see who’s currently reading what books. And a place to add new books to our collection. Happy reading!</p>
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