import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// actions
import { logoutUser } from '../actions/loginActions'

class Home extends Component {
  constructor(props) {
    super();
  }

  onClick = (e) => {
    e.preventDefault();
    this.props.login();
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
  login: () => dispatch(logoutUser())
});

export default withRouter(connect(null, mapDispatchToProps)(Home))
