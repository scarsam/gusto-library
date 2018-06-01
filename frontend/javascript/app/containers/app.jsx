import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { store } from '../store/reduxStore';

import Test from '../containers/test';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Test/>
      </Provider>
    );
  }
}

export default App