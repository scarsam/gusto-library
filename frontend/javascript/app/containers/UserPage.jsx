import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Components
import {User} from '../components/User'

// action
import {getUser} from '../actions/userActions';

class UserPage extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.id);
  }

  render() {
    return(
      <div>
        <h1>User Page</h1>
        <User user={this.props.user} pending={this.props.pending}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  pending: state.userReducer.pending
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (id) => dispatch(getUser(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPage))