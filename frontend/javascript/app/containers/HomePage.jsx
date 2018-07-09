import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// actions
import {getCurrentUser} from "../actions/userActions";

class HomePage extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const userObject = sessionStorage.getItem('user');
    this.props.getCurrentUser(userObject);
  }

  render() {
    return (
      <div>
        <h1>Welcome {this.props.current_user.name}</h1>
        <ul>
          <li>Add comments for complex reducers</li>
          <li>Check token validation on backend</li>
          <li>Style</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  current_user: state.userReducer.current_user
});


const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: (userObject) => dispatch(getCurrentUser(userObject)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage))
