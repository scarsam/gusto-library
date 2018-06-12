import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/reduxStore';

import SignUpForm from './signUpForm'
import Home from './home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/signup' component={SignUpForm} />
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App