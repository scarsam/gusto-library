import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {PrivateRoute} from "../components/PrivateRoute";
import {Provider} from 'react-redux';
import {store} from '../store/reduxStore';
import history from '../history'

import HomePage from './HomePage'
import BookSearchPage from './BookSearchPage'
import GoogleLoginPage from './GoogleLoginPage'
import LibraryPage from './LibraryPage'
import UsersPage from './UsersPage'
import UserPage from './UserPage'
import {Navbar} from "../components/Navbar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Navbar/>
            <Switch>
              <Route path='/login' component={GoogleLoginPage}/>
              <PrivateRoute path='/books/new' component={BookSearchPage}/>
              <PrivateRoute path='/library' component={LibraryPage}/>
              <PrivateRoute path='/users/:id' component={UserPage}/>
              <PrivateRoute path='/users' component={UsersPage}/>
              <PrivateRoute path='/' component={HomePage}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App