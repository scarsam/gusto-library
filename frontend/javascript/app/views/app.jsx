import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {PrivateRoute} from "../components/privateRoute";
import {Provider} from 'react-redux';
import {store} from '../store/reduxStore';
import history from '../history'

import HomePage from './homePage'
import BookSearchPage from './bookSearchPage'
import SocialLoginPage from './socialLoginPage'
import LibraryPage from './libraryPage'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path='/login' component={SocialLoginPage}/>
            <PrivateRoute path='/books/new' component={BookSearchPage}/>
            <PrivateRoute path='/library' component={LibraryPage}/>
            <PrivateRoute path='/' component={HomePage}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App