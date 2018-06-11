import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignUp } from "../actions/signUpActions";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.userSignUp(this.state)
  };

  render () {
    const { fullName, email, password } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor='fullName'>Full Name:</label>
          <input name='fullName' value={fullName} onChange={this.onChange} type='text'/>
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input name='email' value={email} onChange={this.onChange} type='text'/>
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input name='password' value={password} onChange={this.onChange} type='password'/>
        </div>
        <input type='submit'/>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userSignUp: userData => dispatch(userSignUp(userData))
});

export default connect(null, mapDispatchToProps)(SignUpForm)