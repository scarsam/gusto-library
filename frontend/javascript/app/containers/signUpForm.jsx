import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from "../actions/signUpActions";

class SignUpForm extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
  };

  render () {
    const { name, email, password } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor='name'>Full Name:</label>
          <input name='name' value={name} onChange={this.onChange} type='text'/>
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
  signUp: userData => dispatch(signUp(userData))
});

export default connect(null, mapDispatchToProps)(SignUpForm)