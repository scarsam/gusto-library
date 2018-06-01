import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Hello } from '../components/hello'

class Test extends Component {
  render() {
    const { name } = this.props.person;
    return (
      <Hello name={name} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    person: state.person,
  }
};

export default connect(mapStateToProps)(Test)