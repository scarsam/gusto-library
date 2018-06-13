import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// actions
import { logOutUser } from '../actions/sessionActions'

class Home extends Component {
  constructor(props) {
    super();
  }

  onClick = (e) => {
    e.preventDefault();
    this.props.logOutUser();
  };

  render() {
    return (
      <div>
        <h1>Hi!</h1>
        <button onClick={this.onClick}>Logout</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logOutUser: () => dispatch(logOutUser)
});

export default withRouter(connect(null, mapDispatchToProps)(Home))
