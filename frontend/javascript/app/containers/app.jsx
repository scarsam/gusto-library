import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap'
import {Router, Route, Switch} from 'react-router-dom';
import {PrivateRoute} from "../components/PrivateRoute";
import {Provider} from 'react-redux';
import {store} from '../store/reduxStore';
import history from '../history'

import BookSearchPage from './BookSearchPage'
import GoogleLoginPage from './GoogleLoginPage'
import LibraryPage from './LibraryPage'
import UsersList from './UsersList'
import NavBar from "../containers/NavBar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className='container'>
            <NavBar/>
            <Switch>
              <Route path='/login' component={GoogleLoginPage}/>
              <PrivateRoute path='/library' component={LibraryPage}/>
              <PrivateRoute path='/users' component={UsersList}/>
              <PrivateRoute path='/' component={BookSearchPage}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App