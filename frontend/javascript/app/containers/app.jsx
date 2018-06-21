import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from "../components/privateRoute";
import { Provider } from 'react-redux';
import { store } from '../store/reduxStore';
import history from '../history'

import Home from './home'
import BookSearchPage from './bookSearchPage'
import SocialLogin from './socialLogin'
import Library from './library'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path='/login' component={SocialLogin}/>
            <PrivateRoute path='/books/new' component={BookSearchPage}/>
            <PrivateRoute path='/library' component={Library}/>
            <PrivateRoute path='/' component={Home}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App