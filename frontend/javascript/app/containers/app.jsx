import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { store } from '../store/reduxStore';

import SignUpForm from './signUpForm'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SignUpForm />
      </Provider>
    );
  }
}

export default App