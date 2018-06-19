import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// actions
import { logoutUser } from '../actions/sessionActions'
import { getUser } from "../actions/userActions";

class Home extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const userObject = sessionStorage.getItem('user')
    this.props.getUser(userObject)
  }

  onClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <div>
        <h1>Welcome {this.props.user}</h1>
        <ul>
          <li>Refresh sessionReducer on page refresh</li>
        </ul>
        <button onClick={this.onClick}>Logout</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  getUser: (userObject) => dispatch(getUser(userObject)),
});

const mapStateToProps = (state) => ({
  user: state.userReducer.user
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
