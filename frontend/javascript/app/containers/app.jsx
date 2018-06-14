import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/reduxStore';
import history from '../history'

import SocialLogin from './socialLogin'
import Home from './home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={SocialLogin} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App