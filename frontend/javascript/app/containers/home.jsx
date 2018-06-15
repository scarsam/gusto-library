import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// actions
import { logoutUser } from '../actions/sessionActions'

class Home extends Component {
  constructor(props) {
    super();
  }

  onClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <div>
        <ul>
          <li>Auth function to decode jwt token from backend</li>
        </ul>
        <button onClick={this.onClick}>Logout</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser())
});

export default withRouter(connect(null, mapDispatchToProps)(Home))
