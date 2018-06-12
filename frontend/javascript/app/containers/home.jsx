import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <h1>Hi!</h1>
    )
  }
}

export default connect(null, null)(Home)
