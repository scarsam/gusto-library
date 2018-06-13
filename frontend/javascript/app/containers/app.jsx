import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/reduxStore';
import history from '../history'

import SignUpForm from './signUpForm'
import LogInForm from './logInForm'
import Home from './home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={SignUpForm} />
            <Route path='/login' component={LogInForm} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App