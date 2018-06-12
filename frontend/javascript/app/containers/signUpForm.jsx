import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { signUp } from "../actions/signUpActions";
import { signUpForm } from "../actions/signUpFormActions";

class SignUpForm extends Component {
  constructor(props) {
    super();
  }

  onChange = (e) => {
    let formData = {[e.target.name]: e.target.value};
    this.props.updateForm(formData);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.props.user);
  };

  render () {
    return (
      // Why do I need to bind even though I use arrow function?
      <form onSubmit={this.onSubmit.bind(this)}>
        <div>
          <label htmlFor='name'>Full Name:</label>
          <input name='name' value={this.props.user.name} onChange={this.onChange} type='text'/>
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input name='email' value={this.props.user.email} onChange={this.onChange} type='text'/>
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input name='password' value={this.props.user.password} onChange={this.onChange} type='password'/>
        </div>
        <input type='submit'/>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.signUpFormReducer,
});

const mapDispatchToProps = (dispatch) => ({
  updateForm: formData => dispatch(signUpForm(formData)),
  signUp: userData => dispatch(signUp(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)