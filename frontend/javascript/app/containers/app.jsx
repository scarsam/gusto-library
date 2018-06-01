import React, { Component } from 'react';
import Hello from '../components/hello'

class App extends Component {
  render() {
    return (
      <div>
        <Hello name='Sam' />
      </div>
    );
  }
}
export default App