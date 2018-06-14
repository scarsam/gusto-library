import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'

// Actions
import { logInUser } from "../actions/sessionActions";
import { onFormChange } from "../actions/sessionFormActions";

class LogInForm extends Component {
  constructor(props) {
    super();
  }

  onChange = (e) => {
    let formData = {[e.target.name]: e.target.value};
    this.props.onFormChange(formData);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.logInUser(this.props.user);
  };

  render () {
    return (
      <div>
        <h1>Login Form</h1>
        <a href="/auth/google_oauth2">Google</a>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}

// Form state
const mapStateToProps = (state) => ({
  user: state.sessionFormReducer,
});

// Dispatch for form inputs and submit
const mapDispatchToProps = (dispatch) => ({
  onFormChange: formData => dispatch(onFormChange(formData)),
  logInUser: () => dispatch(logInUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogInForm))