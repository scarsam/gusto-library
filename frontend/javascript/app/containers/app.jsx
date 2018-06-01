import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store } from '../store/reduxStore'
import Hello from '../components/hello'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Hello name='Sam' />
        </div>
      </Provider>
    );
  }
}
export default App