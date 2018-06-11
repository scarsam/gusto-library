import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { store } from '../store/reduxStore';

import Test from '../containers/test';
import Session from '../containers/session'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Test />
          <Session />
        </div>
      </Provider>
    );
  }
}

export default App